import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
    const [listofRestaurant, setListofRestaurant] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(API_URL);
        const json = await data.json();

        setListofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    return listofRestaurant.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="res-container">
                {listofRestaurant.map((resdata) => (
                    <RestaurantCard key={resdata?.info?.id} resdata={resdata} />
                ))}
            </div>
        </div>
    );
}

export default Body;
