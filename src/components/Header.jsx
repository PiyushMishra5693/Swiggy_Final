import { useEffect, useState } from "react";
import { IMAGE_URL } from "../utils/constants";
const Header = () => {

    const [loginbtn,setLoginBtn]= useState("Login");


    return (
        <div className="header">
            <div className="logo-containers">
                <img  className="logo" src={IMAGE_URL} />
            </div>

            <div className="nav-items">
                    <ul className="items">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                        <button className="btn"
                        onClick={ ()=> loginbtn ==="Login"?setLoginBtn("Logout"):setLoginBtn("Login")}
                        >{loginbtn}</button>
                    </ul>
            </div>
        </div>
    )
}

export default Header;