import React from "react";
import "./style.css";
import logo from "../assets/3_Data/Lab02/Group 16.png";

function Footer () {
    return (
        <footer className="footer">
        <div className="footer-container">
            <div className="footer-section about">
            <h3>About Us</h3>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="subscribe">
                <input type="email" placeholder="Enter your email" />
                <button>Send</button>
            </div>
            </div>

            <div className="footer-section">
            <h3 className="about">Learn More</h3>
            <ul>
                <li><a href="#">Our Cooks</a></li>
                <li><a href="#">See Our Features</a></li>
                <li><a href="#">FAQ</a></li>
            </ul>
            <h3 className="about">Shop</h3>
            <ul>
                <li><a href="#">Gift Subscription</a></li>
                <li><a href="#">Send Us Feedback</a></li>
            </ul>
            </div>

            <div className="footer-section">
            <h3 className="about">Recipes</h3>
            <ul>
                <li><a href="#">What to Cook This Week</a></li>
                <li><a href="#">Pasta</a></li>
                <li><a href="#">Dinner</a></li>
                <li><a href="#">Healthy</a></li>
                <li><a href="#">Vegetarian</a></li>
                <li><a href="#">Vegan</a></li>
                <li><a href="#">Christmas</a></li>
            </ul>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="footer-brand">
            <img src={logo} alt="Chefify Logo" />
            </div>
            <p>
            © 2023 Chefify Company &nbsp; | &nbsp;
            <a href="#">Terms of Service</a> &nbsp; | &nbsp;
            <a href="#">Privacy Policy</a>
            </p>
        </div>
        </footer>
    );
};

export default Footer;
