import React from "react";
import "./Results.css"
const resultStyle = {

}
function Results() {
    return <div className="result-box">
        <div className="result-head">
            <h3>
                <a href="/result?house=2bhk">2BHK House for rent in Gachibowli</a>
            </h3>
            <p style={{ fontSize: "15px" }}>
                Independent House, TNGOS colony
            </p>
        </div>
        <div className="result-money-details">
            <div className="result-rent-details">
                <p>
                    25000
                </p>
                <p>
                    rent-negotiable
                </p>
            </div>
            <div className="result-rent-details" style={{ borderRight: "solid 1px black", padding: "0 5.25rem" }}>
                <p>
                    75000
                </p>
                <p>
                    deposit
                </p>
            </div>
            <div className="result-built-up">
                <p>
                    1000sqft
                </p>
                <p>
                    Built Up
                </p>
            </div>

        </div>
        <div style={{ display: "flex" }} className="result-card-details">
            <img src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=" alt="house-img" />
            <div className="result-house-details-card">

                <div className="result-house-interior-details">
                    <div style={resultStyle}>
                        <h4>
                            Furnished
                        </h4>
                        <p>
                            Furnishing
                        </p>
                    </div>
                    <div style={{ ...resultStyle, border: "none" }}>
                        <h4>2 BHK</h4>
                        <p>Apartment Type</p>
                    </div>
                </div>
                <div style={{ display: "flex", paddingTop: "1rem" }}>
                    <div style={resultStyle}>
                        <h4>
                            Family
                        </h4>
                        <p>
                            Preferred Tenants
                        </p>
                    </div>
                    <div style={{ ...resultStyle, border: "none" }}>
                        <h4>22-10-2024</h4>
                        <p>Available from</p>
                    </div>
                </div>

                <button className="result-house-details-button">
                    Get Owner details
                </button>
                <button className="result-house-details-button">
                    Add to wishlist
                </button>
            </div>

        </div>

    </div>
}



export default Results