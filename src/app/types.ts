
export type FoodListProps = { rankings: Record<RestaurantData["osm"], RestaurantData> }

export type RestaurantItem = {
    restaurant: string;
    id: string;
    link: string;
}

export type RestaurantVote = {
    restaurant: string;
    id: string;
    link: string;
    count: number;
}

export type FoodListItemProps = {
    nrOfVotes: number;
    rank: number;
    qrCode: string;
    type: string;
    ranking: RestaurantData
    expanded: boolean;
    handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void
};


export type SubmitRestaurantBody = {
    osm: string;
    type: string;
    name: string;
    address: {
        road: string;
        house_number?: string;
        postcode: string;
    }
}
export type RestaurantData = {
    osm: string;
    link: string;
    type: string;
    name: string;
    address: {
        road: string;
        house_number: string;
        postcode: string;
    };
    count: number;
}

export type DynamoDBRestaurantResult = {
    osm: RestaurantData["osm"];
    address: RestaurantData["address"];
    type: RestaurantData["type"];
    name: RestaurantData["name"];
    link: RestaurantData["link"];
}

export type DynamoDBPutRestaurant = {
    id: string,
    osm: SubmitRestaurantBody["osm"],
    address: SubmitRestaurantBody["address"],
    type: SubmitRestaurantBody["type"],
    name: SubmitRestaurantBody["name"],
    link: string,
}

export type SearchResult = {
    address: {
        "ISO3166-2-lvl4": string;
        borough: string;
        city: string;
        country: string;
        country_code: string;
        neighbourhood: string;
        postcode: string;
        road: string;
        shop: string;
        suburb: string;
        house_number?: string;
        city_district?: string;
    },
    addresstype: string;
    boundingbox: string[];
    category: string;
    display_name: string
    importance: number;
    lat: number;
    licence: string
    lon: string;
    name: string;
    osm_id: number;
    osm_type: string;
    place_id: number;
    place_rank: number;
    type: string;
}