import { Suspense } from "react";
import { getRestaurants } from "./actions";
import { FoodList } from "./components/FoodList/FoodList";
import Loading from "./loading";
import Link from "next/link";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Typography from "@mui/material/Typography";

export default async function Home() {
  const restaurants = await getRestaurants();

  return (
    <Suspense fallback={<Loading />}>
      <main className="flex flex-col items-center gap-y-4">
        <Typography variant="h3" component="h1">🍝 High score</Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="body1">How does it work?</Typography>
          </AccordionSummary>
          <AccordionDetails classes={{root: "flex flex-col gap-y-4"}}>
            <Typography variant="body1">
              This is a simple app to track what your colleagues are eating.
            </Typography>
            <Typography variant="body1">
              To be able to see the restaurant you ate at, you need <Link className="text-blue-400" href={"/register"}>Register</Link> the restaurant
            </Typography>
          </AccordionDetails>
        </Accordion>
        {Object.entries(restaurants).length === 0 ? (
          <div className="mt-4 flex flex-col gap-y-2">
            <Typography variant="h4">
              No votes have been submitted yet!
            </Typography>
            <Typography variant="h5">
              But head on over to <Link className="text-blue-400" href={"/register"}>Register</Link> and submit your vote!
            </Typography>
          </div>
        ) : (
          <FoodList rankings={restaurants} />
        )}
      </main>
    </Suspense>
  );
}
