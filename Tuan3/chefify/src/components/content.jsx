import React, { useState } from "react";
import "./style.css";
import Slider2 from "../assets/3_Data/Lab02/Slider 2.png";
import notice from "../assets/3_Data/Lab02/Image 105.png";
import Rating18 from "../assets/3_Data/Lab02/Rating 18.png";
import Rating19 from "../assets/3_Data/Lab02/Rating 19.png";
import Rating20 from "../assets/3_Data/Lab02/Rating 20.png";
import Rating16 from "../assets/3_Data/Lab02/Rating 16.png";
import Rating17 from "../assets/3_Data/Lab02/Rating 17.png";

function Content () {
    const [filters, setFilters] = useState({
        panFried: false,
        grilled: false,
        roasted: false,
        steamed: false,
        baked: false,
        stirFried: false,
    });

    const ratingImages = {
        16: Rating16,
        17: Rating17,
        18: Rating18,
        19: Rating19,
        20: Rating20,
    };
    
    const [ratings, setRatings] = useState({
        rating1: false,
        rating2: false,
        rating3: false,
        rating4: false,
        rating5: false,
    });
    

    const handleFilterChange = (e) => {
        setFilters({
        ...filters,
        [e.target.name]: e.target.checked,
        });
    };

    const handleRatingChange = (e) => {
        setRatings({
        ...ratings,
        [e.target.name]: e.target.checked,
        });
    };

    return (
        <main className="content">
        {}
        <aside className="filters">
            <h3>Filters</h3>

            {}
            <div className="filter-section">
            <h4>Type</h4>
            <div className="type-grid">
                {["Pan-fried", "Grilled", "Roasted", "Steamed", "Baked", "Stir-fried"].map((type, index) => (
                <label key={index}>
                    <input
                    type="checkbox"
                    name={type.toLowerCase().replace("-", "")}
                    checked={filters[type.toLowerCase().replace("-", "")]}
                    onChange={handleFilterChange}
                    />{" "}
                    {type}
                </label>
                ))}
            </div>
            </div>

            {}
            <div className="filter-section">
            <h4>Time</h4>
            <div>
                <span>10 minutes - 60 minutes</span>
                <img src={Slider2} alt="Slider" className="minutes" />
            </div>
            </div>

            {}
            <div className="filter-section">
            <h4>Rating</h4>
            <div className="stars">
                {[18, 17, 19, 20, 16].map((num, index) => (
                    <label key={index}>
                        <input
                            type="checkbox"
                            name={`rating${index + 1}`}
                            checked={ratings[`rating${index + 1}`]}
                            onChange={handleRatingChange}
                        />
                        <span>
                            <img src={ratingImages[num]} alt={`Rating ${num}`} />
                        </span>
                    </label>
                ))}
            </div>

            </div>

            <button className="apply-filters">Apply</button>
        </aside>

        {}
        <section className="no-results">
            <div className="message">
            <h2>
                Sorry, no results were found for "<span className="query">cakescascsa</span>"
            </h2>
            <img src={notice} alt="No Results" />
            <p>We have all your Independence Day sweets covered.</p>

            <div className="suggestions">
                {[
                { name: "Sweet Cake", bgColor: "rgb(241, 164, 188)", textColor: "rgb(235, 64, 129)" },
                { name: "Black Cake", bgColor: "rgb(204, 208, 245)", textColor: "rgb(50, 53, 243)" },
                { name: "Pizza Varie", bgColor: "rgb(255, 199, 217)", textColor: "rgb(235, 64, 129)" },
                { name: "Healthy food", bgColor: "rgb(187, 245, 237)", textColor: "rgb(11, 70, 60)" },
                ].map((tag, index) => (
                <a
                    key={index}
                    href="#"
                    className="tag"
                    style={{ backgroundColor: tag.bgColor, color: tag.textColor }}
                >
                    {tag.name}
                </a>
                ))}
            </div>
            </div>
        </section>
        </main>
    );
};

export default Content;
