"use client";

import { List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import { submitRestaurant } from "../../actions";
import { useFormStatus } from "react-dom"
import LinearProgress from '@mui/material/LinearProgress';
import { useRouter } from 'next/navigation'
import { SearchResult } from '@/app/types';
import { FoodIcon } from '../Shared/FoodIcon';

export const SearchResults = ({ results, search }: { results: SearchResult[] | null, search: string }) => {
    const { pending } = useFormStatus();
    const { push } = useRouter()

    const postRestaurant = async (restaurant: SearchResult) => {
        const { type, name, address, osm_type, osm_id } = restaurant
        const body = {
            osm: `${osm_type} ${osm_id}`,
            type,
            name,
            address: {
                road: address.road,
                house_number: address.house_number,
                postcode: address.postcode,
            },
        }
        await submitRestaurant(body);
        push('/')
    }

    if (!results) {
        return (
            <div className='w-full mt-12'>
                <Typography variant='h4' className='text-center'>No results found for {`"${search}"`}</Typography>
            </div>
        )
    }

    return (
        <>
            {pending && (
                <div className='w-full my-2'>
                    <LinearProgress sx={{ height: 5 }} />
                </div>
            )}
            {results?.length > 0 && (
                <List className="bg-black pt-0">
                    {results.map((result) => {
                        const { osm_id, name, address, type } = result;
                        const { road, house_number, city_district } = address;
                        return (
                            <ListItem
                                className='bg-white p-0 text-black rounded-lg my-2'
                                key={osm_id}>
                                <ListItemButton className='border border-gray-100 hover:border-gray-300' onClick={() => postRestaurant(result)}>
                                    <div className='flex flex-row items-center p-2'>
                                        <div className="flex flex-col">
                                            <ListItemText primary={name} />
                                            <ListItemText primary={"Address: " + road + " " + (house_number ? house_number : "") + " - " + city_district} />
                                        </div>
                                        <FoodIcon type={type} />
                                    </div>
                                </ListItemButton>
                            </ListItem>
                        )
                    }
                    )}
                </List>
            )}
        </>

    )
}