"use client"

import Button from "@mui/material/Button"
import { useFormStatus } from "react-dom"


export const SearchButton = ({ search, oldSearch }: { search: string, oldSearch: string }) => {
    // This hook needs to be inside of the child component of the form it is being used in.
    const { pending } = useFormStatus()

    return (
        <Button
            type='submit'
            variant='outlined'
            aria-disabled={pending}
            disabled={pending || search.length < 2 || (search === oldSearch)}>
            Search for location
        </Button>
    )
}
