import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import { Link } from "react-router-dom";

const Recipe = () => {

    const cardsData = [
        {
            img: "../img/Italian-style tomato.png",
            name: "Italian-style tomato salad",
            minutes: "14 minutes",
        },
        {
            img: "../img/Vegetable and shrimp spaghetti.png",
            name: "Vegetable and shrimp spaghetti",
            minutes: "15 minutes",
        },
        {
            img: "../img/Lotus delight salad.png",
            name: "Lotus delight salad",
            minutes: "20 minutes",
        },
        {
            img: "../img/Snack cakes.png",
            name: "Snack cakes",
            minutes: "21 minutes",
        },
        {
            img: "../img/Salad with cabbage.png",
            name: "Salad with cabbage",
            minutes: "32 minutes",
        },
        {
            img: "../img/Bean, Shrimp, and Potato Salad.png",
            name: "Bean, Shrimp, and Potato Salad",
            minutes: "32 minutes",
        },
        {
            img: "../img/Sunny-side up fried eggs.png",
            name: "Sunny-side up fried eggs",
            minutes: "32 minutes",
        },
        {
            img: "../img/Lotus delight salad_01.png",
            name: "Lotus delight salad",
            minutes: "32 minutes",
        },

    ]

    return (
        <div className="container">
            <div className="row m-2">
                <div className="navbar-collapse" id="navbarNav">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link text-secondary" to="/">Home</Link>
                        </li>
                        <li className="nav-item pt-2">
                            <img src='../img/Arrow forward ios 2.png' alt="Button" />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/recipe" style={{ color: '#F44B87' }}>Your Recipe Box</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row m-5">
                <h2>Emma Gonzalez's Recipe Box</h2>
            </div>
            <div className="row m-5">
                <div className="col-2">
                    <img src="../img/avatar.png" alt="Avatar" />
                </div>
                <div className="col-10">
                    <div className="row">
                        <p className="text-secondary">
                            Emma Gonzalez is a deputy editor at Chefify, bringing her expertise as a former cooking editor at The Los Angeles Times. She is also an accomplished author, contributing to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now resides in New York City, where she explores a wide range of culinary delights.
                        </p>
                    </div>
                    <div className="row mt-4" >
                        <h5 className="col-2" style={{ color: "#F44B87" }}>6.5k Subscribes</h5>
                        <button style={{ color: 'white', background: '#F44B87', height: '30px', width: '100px', border: "none", borderRadius: '5px' }}>
                            Share
                            <img src="../img/Share fat.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="row m-5">
                <div className="">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link " style={{ background: '#FEF0F5', color: '#F44B87', borderRadius: '10px 10px 0px 0px' }} href="#">Save Recipes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Folders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Recipes by Genevievea</a>
                        </li>
                    </ul>
                    <hr className="m-0" />
                </div>
            </div>

            <div className="row row-cols-4 m-5 g-4">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>

            <div className="row m-5">
                <div className="d-flex justify-content-end">
                    <Pagination />
                </div>
            </div>
        </div>
    );
}

export default Recipe;
