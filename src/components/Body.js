import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/Mock_Data";
import {useEffect, useState} from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () =>{
    const [ListOfRestaurant, setListOfRestaurant] = useState([])
    const [searchText, setSearchText] = useState("")
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
  
    useEffect(()=>{
      fetchData()
    },[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json()
  console.log(json)
  setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
 

    const onlineStatus = useOnlineStatus()

    if(onlineStatus===false){
      return <h1>Looks like you are offline !!! Please check your internet connection</h1>
    }

    return ListOfRestaurant.length === 0 ? (<Shimmer/>
    ):(
      <div className = "Body">
      <div className="filter">
      <input 
      type="text"
      className="search-box"
      value={searchText} 
      onChange={(e) => setSearchText(e.target.value)}
      />
     <button 
      onClick={() =>{
        console.log(searchText)
        const filteredRestaurant = ListOfRestaurant.filter((res) => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        setFilteredRestaurants(filteredRestaurant)
       
      }}
      >
      Search
      </button>
      <button className = "filter-btn" 
      onClick ={() => {
        const Filter = ListOfRestaurant.filter((res) => res.info.avgRating > 4)
        setFilteredRestaurants(Filter)
      }} >Top Restaurant</button>
      </div>

      <div className = "res-container">
      {filteredRestaurants.map((restaurant) =>
      <Link key ={restaurant.info.id} to={"restaurants/" + restaurant.info.id}><RestaurantCard resData ={restaurant}/></Link>
      )}
      </div>
    </div>
    )
   
  }

  export default Body;