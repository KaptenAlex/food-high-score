import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FoodIcon } from "./components/Shared/FoodIcon";
import QRCode from "react-qr-code";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="flex flex-col items-center gap-y-4">
      <div className="flex flex-col items-center gap-y-4 max-w-96">
        <Typography variant="h3" component="h1">🍝 High score</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="body1">How does it work?</Typography>
          </AccordionSummary>
          <AccordionDetails classes={{ root: "flex flex-col gap-y-4" }}>
            <Typography variant="body1">
              This is a simple app to track what your colleagues are eating.
            </Typography>
            <Typography variant="body1">
              To be able to see the restaurant you ate at, you need Register the restaurant
            </Typography>
          </AccordionDetails>
        </Accordion>
        <FoodListSkeleton />
      </div>
    </main>
  )
}


// Used for suspense fallback in page.tsx
const FoodListSkeleton = () => {
  return (
    <div className="mt-4 w-full flex gap-3 flex-col">
      <Accordion className="bg-white text-black rounded-md" expanded={false}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel-1d-content" id="panel-1d-header"
          classes={{ content: "flex flex-row gap-x-2 items-center" }}
        >
          <FoodIcon type={"fast_food"} />
          <Typography variant="subtitle1">#1 - </Typography>
          <Typography variant="caption">Max - Sveavägen</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: "flex flex-row justify-between gap-1 items-center" }}>
          <Typography variant="body1">Number of votes: 15</Typography>
          <QRCode
            size={50}
            style={{ height: "50px", maxWidth: "50px", width: "50px" }}
            value="https://youtu.be/dQw4w9WgXcQ"
            viewBox="0 0 50 50"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white text-black rounded-md" expanded={false}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel-1d-content" id="panel-1d-header"
          classes={{ content: "flex flex-row gap-x-2 items-center" }}
        >
          <FoodIcon type={"fast_food"} />
          <Typography variant="subtitle1">#1 - </Typography>
          <Typography variant="caption">Bar Central - Hornsgatan</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: "flex flex-row justify-between gap-1 items-center" }}>
          <Typography variant="body1">Number of votes: 11</Typography>
          <QRCode
            size={50}
            style={{ height: "50px", maxWidth: "50px", width: "50px" }}
            value="https://youtu.be/dQw4w9WgXcQ"
            viewBox="0 0 50 50"
          />
        </AccordionDetails>
      </Accordion>
      <Accordion className="bg-white text-black rounded-md" expanded={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel-1d-content" id="panel-1d-header"
          classes={{ content: "flex flex-row gap-x-2 items-center" }}
        >
          <FoodIcon type={"fast_food"} />
          <Typography variant="subtitle1">#1 - </Typography>
          <Typography variant="caption">Keemchi - Kungsgatan</Typography>
        </AccordionSummary>
        <AccordionDetails classes={{ root: "flex flex-row justify-between gap-1 items-center" }}>
          <Typography variant="body1">Number of votes: 9</Typography>
          <QRCode
            size={50}
            style={{ height: "50px", maxWidth: "50px", width: "50px" }}
            value="https://youtu.be/dQw4w9WgXcQ"
            viewBox="0 0 50 50"
          />
        </AccordionDetails>
      </Accordion>
    </div>

  )
}