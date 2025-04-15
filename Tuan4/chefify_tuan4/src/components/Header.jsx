import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-4 py-2">
            <Link className="navbar-brand" to="/">
                <img src="../img/Group 9.png" alt="Chef's hat" height="40" />
            </Link>

            <div className="input-group mx-3" style={{ width: "300px" }}>
                <span className="input-group-text bg-light border-0">
                    <Link to="/search">
                        <img src="../img/search.png" alt="Search" height="16" />
                    </Link>
                </span>
                <input
                    type="text"
                    className="form-control border-0 bg-light"
                    placeholder="Search..."
                    style={{ boxShadow: "none" }}
                />
            </div>


            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    {['What to cook', 'Recipes', 'Ingredients', 'Occasions', 'About Us'].map((item) => (
                        <li className="nav-item mx-2" key={item}>
                            <a className="nav-link text-secondary" href="#">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <Link to="/recipe" className="nav-link">
                <button className="btn btn-pink d-flex align-items-center me-3" style={{ backgroundColor: '#FEF0F5', color: '#F44B87' }}>
                    <img src="../img/archive_check.png" alt="Checkmark" height="20" className="me-2" />
                    Your Recipe Box
                </button>
            </Link>
            <img
                src="../img/avatar.png"
                alt="Profile"
                className="rounded-circle"
                width="40"
                height="40"
                style={{ cursor: "pointer" }}
            />
        </nav>
    );
};

export default Header;
