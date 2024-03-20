"use client"

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from "@mui/material/Typography";
import QRCode from "react-qr-code";
import { FoodListItemProps } from "../../types";
import { FoodIcon } from '../Shared/FoodIcon';

export const FoodListItem = (props: FoodListItemProps) => {
    const { nrOfVotes, rank, qrCode, ranking, type, expanded, handleChange } = props;

    return (
        <Accordion className="bg-white text-black rounded-md" expanded={expanded} onChange={handleChange(`panel${rank}`)}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls={`panel-${rank}d-content`} id={`panel-${rank}d-header`}
                classes={{ content: "flex flex-row gap-x-2 items-center" }}
            >
                <FoodIcon type={type} />
                <Typography variant="body1">#{rank} - </Typography>
                <Typography variant="body1">{ranking.name} - {ranking.address.road}</Typography>
            </AccordionSummary>
            <AccordionDetails classes={{ root: "flex flex-row justify-between gap-1 items-center" }}>
                <Typography variant="body1">Number of votes: {nrOfVotes}</Typography>
                <QRCode
                    size={50}
                    style={{
                        height: "50px",
                        maxWidth: "50px",
                        width: "50px"
                    }}
                    value={qrCode}
                    viewBox="0 0 50 50"
                />
            </AccordionDetails>
        </Accordion>
    )
}