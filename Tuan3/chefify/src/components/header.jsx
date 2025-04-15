import { useState } from 'react';
import './style.css';
import logo from "../assets/3_Data/Lab01/Group 9.png";
import avatar from "../assets/3_Data/Lab02/Avatar 35.png"

function Header() {

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div>
                <nav className="nav-links">
                    <a href="#">What to cook</a>
                    <a href="#">Recipes</a>
                    <a href="#">Ingredients</a>
                    <a href="#">Occasions</a>
                    <a href="#">About us</a>
                </nav>
                <div className="recipe-box">
                    <button>Your Recipe Box</button>
                    <img src={avatar} alt="User Profile" className="profile-pic" />
                </div>
            </header>
        </>
    );
}

export default Header;
