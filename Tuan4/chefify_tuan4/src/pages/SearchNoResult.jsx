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

const tags = [
    { label: "Sweet Cake", color: "#F44B87", background: "#FEF0F5" },
    { label: "Black Cake", color: "#AF95DF", background: "#F4F0FF" },
    { label: "Pozole Verde", color: "#F44B87", background: "#FEF0F5" },
    { label: "Healthy food", color: "#74A3AF", background: "#EDFCFD" },
];

const SearchNoResult = () => {
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
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h3 className="fw-bold">Sorry, no results were found for "cakescascsa"</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="../img/nothing.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <h5 className="text-secondary fw-normal">We have all your Independence Day sweets covered.</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            {tags.map((tags, index) => (
                                <span
                                    className="p-2 m-2"
                                    style={{ color: tags.color, background: tags.background, borderRadius: "20px" }}
                                    key={index}
                                >
                                    {tags.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchNoResult;
