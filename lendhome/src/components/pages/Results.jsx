import React from "react";
function Results() {
    return <div>
        {propertyCard()}
    </div>
}
const resultStyle = {
    paddingRight: "5rem",
    paddingLeft: "5rem",
    borderRight: "solid 1px black"
}
function propertyCard() {
    return <div style={{ border: "1px solid black" }}>
        <div>
            <h3>
                <a href="/result?house=2bhk">2BHK House for rent in Gachibowli</a>
            </h3>
            <p style={{fontSize: "15px"}}>
                Independent House, TNGOS colony
            </p>
        </div>
        <div style={{ display: "flex", border: "1px solid black", width: "fit-content", padding: "2rem 0" }}>
            <div style={resultStyle}>
                <p>
                    25000
                </p>
                <p>
                    rent-negotiable
                </p>
            </div>
            <div style={resultStyle}>
                <p>
                    75000
                </p>
                <p>
                    deposit
                </p>
            </div>
            <div style={{...resultStyle, borderRight: "none"}}>
                <p>
                    1000sqft
                </p>
                <p>
                    Built Up
                </p>
            </div>

        </div>
        <div style={{display: "flex"}}>
            <img style={{ height: "20%", width: "20%", margin: "1.5rem" }} src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=" alt="house-img" />
            <div className="house-card-details" style={ {margin: "1.5"}}>
                <div style={{display: "flex", marginBottom: "3rem"}}>
                    <div style={{borderRight: "solid 1px black"}}>
                        <h3>
                            Furnished
                        </h3>
                        <p>
                            Furnishing
                        </p>
                    </div>
                    <div style={{boder}}>
                        <h3>2 BHK</h3>
                        <p>Apartment Type</p>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={resultStyle}>
                        <h3>
                            Family
                        </h3>
                        <p>
                            Preferred Tenants
                        </p>
                    </div>
                    <div style={{...resultStyle, border: "none"}}>
                        <h3>22-10-2024</h3>
                        <p>Available from</p>
                    </div>
                </div>
            <button style={{margin: "1rem 2rem auto 4rem"}}>
                Get Owner details
            </button>
            <button>
                Add to wishlist
            </button>
            </div>
        </div>

    </div>
}

export default Results