"use client"

import { SearchResult } from '@/app/types';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { fetchLocation } from "../../actions";
import { SearchButton } from './SearchButton';
import { SearchResults } from './SearchResults';

export const SearchLocation = () => {
    const [results, setResults] = useState<SearchResult[] | null>([]);
    const [search, setSearch] = useState<string>("")
    const [oldSearch, setOldSearch] = useState<string>("")

    const searchAddress = async (restaurant: FormData) => {
        const name = restaurant.get("restaurant")?.valueOf().toString()
        if (name && name !== oldSearch) {
            setOldSearch(name)
            const fetchRestaurants = await fetchLocation(name.replace(" ", "+"))
            fetchRestaurants.length > 0 ? setResults(fetchRestaurants) : setResults(null)
        }
    }

    return (
        <div className='w-full'>
            <form action={searchAddress}>
                <Typography variant="h6">Search for restaurant</Typography>
                <TextField
                    fullWidth
                    label="Restaurant"
                    placeholder="McDonald's"
                    className="bg-white my-2 border border-gray-600"
                    type="text"
                    name="restaurant"
                    variant="filled"
                    onChange={(e) => setSearch(e.target.value)} />
                <SearchButton oldSearch={oldSearch} search={search} />
                <SearchResults results={results} search={oldSearch} />
            </form>
        </div>
    )
}