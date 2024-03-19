"use client"

import { TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { useState } from "react";
import { fetchLocation } from "../../actions";
import { SearchButton } from './SearchButton';
import { SearchResults } from './SearchResults';
import { SearchResult } from '@/app/types';

export const SearchLocation = () => {
    const [results, setResults] = useState<SearchResult[] | null>([]);
    const [search, setSearch] = useState<string>("")
    const [oldSearch, setOldSearch] = useState<string>("")

    const searchAddress = async (restaurant: FormData) => {
        const name = restaurant.get("restaurant")?.valueOf().toString()
        if (name && name !== oldSearch) {
            setOldSearch(name)
            const fetchRestaurants = await fetchLocation(name)
            fetchRestaurants.length > 0 ? setResults(fetchRestaurants) : setResults(null)
        }
    }

    return (
        <div className='w-full'>
            <form action={searchAddress}>
                <Card className="flex flex-col bg-white p-8 w-full rounded-2xl text-black">
                    <CardHeader title="Search for restaurant" />
                    <CardContent className='flex flex-col'>
                        <TextField
                            label="Address details"
                            className="rounded-lg my-2 border border-gray-600"
                            type="text"
                            name="restaurant"
                            onChange={(e) => setSearch(e.target.value.replace(" ", "+"))} />
                        <SearchButton oldSearch={oldSearch} search={search} />
                    </CardContent>
                </Card>
                <SearchResults results={results} search={oldSearch} />
            </form>
        </div>
    )
}