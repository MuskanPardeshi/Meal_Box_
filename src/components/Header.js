import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () =>{
  const[loginBtn, setLoginBtn] = useState("Login")

  const onlineStatus = useOnlineStatus()

    return(
      <div className ="Header">
        <div className ="logo-container">
          <img className="logo" src = {LOGO_URL}/>
        </div>
        <div className="nav-items">
        <ul>
        <li>Online Status:{onlineStatus ? " ✅ ": " 🔴 "}</li>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
          <Link to ="/about">About Us</Link>
          </li>
          <li>
          <Link to ="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" 
          onClick={()=>{loginBtn ==="Login" ? setLoginBtn("Logout"):setLoginBtn("Login")}}>
          {loginBtn}</button>
        </ul>
        </div>
        
      </div>
    )
  }

  export default Header;