import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import {useParams} from "react-router-dom"

const RestaurantMenu = () =>{
    const [resInfo, setResInfo] = useState(null)
    const {resId} = useParams()
    console.log(resId)

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)
        const json = await data.json()
        // console.log(json)
        setResInfo(json.data)
    }    

    useEffect(()=>{
        fetchMenu()
    },[])

if(resInfo ===null) return <Shimmer />

const {name, cuisines, costForTwoMessage, avgRating} =  resInfo?.cards?.[2]?.card?.card?.info 

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">          
            <h1>{name}</h1>
            <h3>{avgRating} - {costForTwoMessage}</h3>
            <h3>{cuisines.join(", ")}</h3>

            <h2>Menu</h2>
            <ui>{itemCards.map(item =>
            <li key={item.card.info.id}>
                {item.card.info.name} - {item.card.info.price}
            </li>)}
            </ui>
            
        </div>
    )
}

export default RestaurantMenu;

