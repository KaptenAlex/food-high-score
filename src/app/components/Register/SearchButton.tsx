"use client"

import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { useFormStatus } from "react-dom";


const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "black",
    width: "100%",
    backgroundColor: `rgba(255, 255, 255, 1) !important`,
    '&:hover': {
        backgroundColor: `rgba(255, 255, 255, 0.75) !important`,
    }
}));

export const SearchButton = ({ search, oldSearch }: { search: string, oldSearch: string }) => {
    // This hook needs to be inside of the child component of the form it is being used in.
    const { pending } = useFormStatus()
    return (
        <ColorButton
            type="submit"
            variant="contained"
            aria-disabled={pending}
            disabled={pending || search.length < 3 || (search === oldSearch)}>
            Search for location
        </ColorButton>
    )
}
