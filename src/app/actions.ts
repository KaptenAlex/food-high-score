"use server"

import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from 'uuid';
import { fetchLocationFilters } from './constants/constants';
import { DynamoDBPutRestaurant, DynamoDBRestaurantResult, RestaurantData, SearchResult, SubmitRestaurantBody } from './types';

/**
 * A server action that provides the user a list of restaurants based on the search term that they provided.
 * Filters out any locations that don't exist in the fetchLocationFilters constant.
 * @type - string
 * @param addressDetails the address detail that the user is searching for.
 * @returns An array of restaurants, empty array if no results came up.
 */
export async function fetchLocation(addressDetails: string) {
    // GOATED API - this is not wrongly spelt
    const res = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&amenity=${addressDetails}&country=sweden&city=stockholm&format=jsonv2&limit=100`)
    const data: SearchResult[] = await res.json()
    const restaurants = data?.filter((restaurant) => fetchLocationFilters.includes(restaurant.type));
    return restaurants;
}

export async function submitRestaurant(body: SubmitRestaurantBody) {
    try {
        const client = new DynamoDBClient({ region: "eu-north-1", apiVersion: "2012-08-10" });
        const docClient = DynamoDBDocumentClient.from(client);

        const id = uuidv4();
        const item: DynamoDBPutRestaurant = {
            ...body,
            id,
            link: `https://www.openstreetmap.org/${body.osm.replace(" ", "/")}`
        }

        const command = new PutCommand({
            TableName: "food-highscore-table",
            Item: item
        });

        const response = await docClient.send(command);
        response.$metadata?.httpStatusCode === 200 ?
            revalidatePath('/') :
            console.error("Something went wrong with the submission")
    } catch (error) {
        console.error({ error })
    }
}

export async function getRestaurants() {
    try {
        const client = new DynamoDBClient({ region: "eu-north-1", apiVersion: "2012-08-10" });
        const docClient = DynamoDBDocumentClient.from(client);

        const command = new ScanCommand({
            ProjectionExpression: "#OSM, #ADD, #TP, #NM, #LK",
            ExpressionAttributeNames: {
                "#OSM": "osm",
                "#ADD": "address",
                "#TP": "type",
                "#NM": "name",
                "#LK": "link",
            },
            TableName: "food-highscore-table",
            Limit: 100,
        });

        const response = await docClient.send(command);
        const items = response.Items as DynamoDBRestaurantResult[];

        if (items) {
            const uniqueRestaurants: Record<string, RestaurantData> = {}

            for (const restaurantItem of items) {
                const restaurant = uniqueRestaurants[restaurantItem.osm];
                restaurant ? restaurant.count++ : uniqueRestaurants[restaurantItem.osm] = { ...restaurantItem, count: 1 }
            }
            return uniqueRestaurants;
        }
        return {}
    } catch (error) {
        console.error({ error })
        return {}
    }
}


