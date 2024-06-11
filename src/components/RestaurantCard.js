import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props
    const {cloudinaryImageId,name, cuisines,avgRating, costForTwo} = resData?.info
  
  return(
    <div className ="res-Card">
  
    <img className ="res-logo" alt = "res-logo"
      src = {CDN_URL+ cloudinaryImageId}
    />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Rating</h3>
      <h3>{costForTwo}</h3>
    </div>
  
  )
  }

  export default RestaurantCard;