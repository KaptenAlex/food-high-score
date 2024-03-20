import Typography from "@mui/material/Typography";
import { SearchLocation } from "../components/Register/SearchLocation";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarIcon from '@mui/icons-material/Star';
import ListItemText from "@mui/material/ListItemText";

export default function Register() {

    return (
        <main className="flex flex-col items-center">
            <div className="flex flex-col max-w-96 gap-y-6">
                <Typography variant="h4">Register restaurant</Typography>
                <Accordion className="bg-white text-black rounded-md">
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel-register"
                        classes={{ content: "flex flex-row gap-x-2 items-center" }}
                    >
                        <Typography variant="body1">How to register a restaurant</Typography>
                    </AccordionSummary>
                    <AccordionDetails classes={{ root: "flex flex-row justify-between gap-1 items-center" }}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Search for the place you ate at by typing it into the input field" />
                            </ListItem>
                            <ListItem className="flex flex-col">
                                <ListItemText
                                    primary={"Check the results below the input, if there are none then you might need to refine it."}
                                    secondary={"For example, 'Krub' will not return anything, but 'Krubb' will!"} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="When the restaurant you ate at appears, click the Submit button inside the card" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <SearchLocation />
            </div>
        </main >
    );
}
