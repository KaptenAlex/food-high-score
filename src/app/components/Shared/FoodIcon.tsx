import FastfoodIcon from '@mui/icons-material/Fastfood';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SportsBarIcon from '@mui/icons-material/SportsBar';
import StoreFrontIcon from '@mui/icons-material/StoreFront';
import WineBarIcon from '@mui/icons-material/WineBar';


export const FoodIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "restaurant":
            return <RestaurantIcon />;
        case "fast_food":
            return <FastfoodIcon />;
        case "cafe":
            return <LocalCafeIcon />;
        case "pub":
            return <SportsBarIcon />;
        case "bar":
            return <WineBarIcon />;
        case "internet_cafe":
            return <StoreFrontIcon />;
        default:
            return null
    }
}