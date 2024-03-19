"use client"

import { useState } from 'react';
import { FoodListProps } from '../../types';
import { FoodListItem } from './FoodListItem';

export const FoodList = (props: FoodListProps) => {
    const { rankings } = props;
    const sortRankings = Object.values(rankings).sort((a, b) => b.count - a.count)

    // Only allow one accordion to be expanded
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
    return (
        <div className="mt-4 w-full flex gap-3 flex-col">
            {sortRankings.map((ranking, i) =>
                <FoodListItem expanded={expanded === `panel${i + 1}`} handleChange={handleChange} key={ranking.osm} qrCode={ranking.link} rank={i + 1} ranking={ranking} nrOfVotes={ranking.count} />
            )}
        </div>
    )
}
