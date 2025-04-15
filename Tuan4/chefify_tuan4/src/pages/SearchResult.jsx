import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../components/Card";
import Pagination from "../components/Pagination";

const typeFilters = [
    { label: "Pan-fried", icon: "../img/Checkbox 6.png" },
    { label: "Stir-fried", icon: "../img/Checkbox 6.png" },
    { label: "Grilled", icon: "../img/Checkbox 8.png" },
    { label: "Roasted", icon: "../img/Checkbox 8.png" },
    { label: "Sauteed", icon: "../img/Checkbox 6.png" },
    { label: "Baked", icon: "../img/Checkbox 6.png" },
    { label: "Steamed", icon: "../img/Checkbox 6.png" },
    { label: "Stewed", icon: "../img/Checkbox 6.png" },
];

const ratingFilters = [
    { checkbox: "../img/Checkbox 6.png", rating: "../img/Rating 13.png" },
    { checkbox: "../img/Checkbox 6.png", rating: "../img/Rating 12.png" },
    { checkbox: "../img/Checkbox 8.png", rating: "../img/Rating 14.png" },
    { checkbox: "../img/Checkbox 8.png", rating: "../img/Rating 15.png" },
    { checkbox: "../img/Checkbox 8.png", rating: "../img/Rating 11.png" },
];

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
    {
        img: "../img/Lotus delight salad_01.png",
        name: "Lotus delight salad",
        minutes: "32 minutes",
    },
];

const SearchResult = () => {
    const typeRows = [];
    for (let i = 0; i < typeFilters.length; i += 2) {
        typeRows.push(typeFilters.slice(i, i + 2));
    }

    return (
        <div className="container">
            <div className="row m-5">
                <div className="col-3">
                    <div className="border rounded p-3">
                        <div className="d-flex align-items-center my-2">
                            <img src="../img/List 1.png" alt="list icon" style={{ width: "20px" }} />
                            <h5 className="m-0 mx-2 fw-bold">FILTERS</h5>
                        </div>
                        <div className="row">
                            <h6 className="col">Type</h6>
                            <div className="col d-flex justify-content-end">
                                <img src="../img/Chevron up large 1.png" alt="toggle" />
                            </div>
                        </div>
                        {typeRows.map((row, index) => (
                            <div key={index} className="row my-2">
                                {row.map((filter, idx) => (
                                    <div key={idx} className="col">
                                        <img src={filter.icon} alt={filter.label} /> {filter.label}
                                    </div>
                                ))}
                            </div>
                        ))}
                        <div className="row my-3">
                            <hr />
                            <h6 className="col">Time</h6>
                            <div className="col d-flex justify-content-end">
                                <img src="../img/Chevron up large 1.png" alt="toggle" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end">
                                <p className="m-0">30 minutes</p>
                            </div>
                            <div className="col">
                                <p className="m-0">50 minutes</p>
                            </div>
                            <img src="../img/Slider 1.png" alt="slider" />
                        </div>
                        <div className="row my-3">
                            <hr />
                            <h6 className="col">Rating</h6>
                            <div className="col d-flex justify-content-end">
                                <img src="../img/Chevron up large 1.png" alt="toggle" />
                            </div>
                        </div>
                        {ratingFilters.map((filter, index) => (
                            <div key={index} className="row my-3">
                                <div className="col">
                                    <img src={filter.checkbox} alt="checkbox" />
                                    <img src={filter.rating} alt={`rating ${index}`} />
                                </div>
                            </div>
                        ))}
                        <div className="row my-3 d-flex justify-content-center">
                            <hr />
                            <button className="btn" style={{ color: "white", background: "#F44B87", width: "90%" }}>
                                Apply
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="row mx-4">
                        <div className="col-9">
                            <h3 className="fw-bold">Salad(32)</h3>
                        </div>
                        <div className="col-3">
                            <select className="form-select">
                                <option selected>A-Z</option>
                                <option value="1">Tùy chọn 1</option>
                                <option value="2">Tùy chọn 2</option>
                                <option value="3">Tùy chọn 3</option>
                            </select>
                        </div>
                        <div className="row row-cols-3 gy-3 m-0 p-0">
                            {cardsData.map((card, index) => (
                                <Card key={index} {...card} />
                            ))}
                        </div>
                        <div className="row mt-5 mb-0">
                            <div className="d-flex justify-content-end">
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;
