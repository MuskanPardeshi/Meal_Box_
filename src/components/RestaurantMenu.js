import Shimmer from "./Shimmer";

import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () =>{
    const {resId} = useParams()
   const resInfo = useRestaurantMenu(resId)


 if(resInfo ===null) return <Shimmer />

 const {name, cuisines, costForTwoMessage, avgRating} =
 resInfo?.cards?.[2]?.card?.card?.info 

 const {itemCards} =
 resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

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

