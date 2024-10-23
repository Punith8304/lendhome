import React from "react";
function Results() {
    return <div>
        {propertyCard()}
    </div>
}
const resultStyle = {
    paddingRight: "4rem",
    paddingLeft: "4rem",
    borderRight: "solid 1px black"
}
function propertyCard() {
    return <div style={{ border: "1px solid black", width: "60vw", marginLeft: "1.5rem", width: "fit-content", height: "fit-content" }}>
        <div style={{margin: "1.5rem"}}>
            <h3 style={{paddingBottom: "1rem"}}>
                <a href="/result?house=2bhk">2BHK House for rent in Gachibowli</a>
            </h3>
            <p style={{fontSize: "15px"}}>
                Independent House, TNGOS colony
            </p>
        </div>
        <div style={{ display: "flex", borderTop: "1px solid black", borderBottom: "1px solid black", width: "fit-content", padding: "1.5rem 2rem"}}>
            <div style={{borderRight: "solid 1px black", padding: "0 5.25rem"}}>
                <p>
                    25000
                </p>
                <p>
                    rent-negotiable
                </p>
            </div>
            <div style={{borderRight: "solid 1px black", padding: "0 5.25rem"}}>
                <p>
                    75000
                </p>
                <p>
                    deposit
                </p>
            </div>
            <div style={{ padding: "0 5rem"}}>
                <p>
                    1000sqft
                </p>
                <p>
                    Built Up
                </p>
            </div>

        </div>
        <div style={{display: "flex"}}>
            <img style={{ height: "200px", width: "200px", margin: "1.5rem 1rem 1.5rem 1.5rem" }} src="https://media.istockphoto.com/id/1255835530/photo/modern-custom-suburban-home-exterior.jpg?s=612x612&w=0&k=20&c=0Dqjm3NunXjZtWVpsUvNKg2A4rK2gMvJ-827nb4AMU4=" alt="house-img" />
            <div className="house-card-details" style={{margin: "1.5", marginBottom: "0", paddingBottom: "1.5rem"}}>
                
                <div style={{display: "flex", paddingBottom: "1rem", borderBottom: "1px solid black"}}>
                    <div style={resultStyle}>
                        <h4>
                            Furnished
                        </h4>
                        <p>
                            Furnishing
                        </p>
                    </div>
                    <div style={{...resultStyle, border: "none"}}>
                        <h4>2 BHK</h4>
                        <p>Apartment Type</p>
                    </div>
                </div>
                <div style={{display: "flex", paddingTop: "1rem" }}>
                    <div style={resultStyle}>
                        <h4>
                            Family
                        </h4>
                        <p>
                            Preferred Tenants
                        </p>
                    </div>
                    <div style={{...resultStyle, border: "none"}}>
                        <h4>22-10-2024</h4>
                        <p>Available from</p>
                    </div>
                </div>

            <button style={{margin: "1rem 2rem auto 4rem"}}>
                Get Owner details
            </button>
            <button style={{margin: "1rem 2rem auto 4rem"}}>
                Add to wishlist
            </button>
            </div>

        </div>

    </div>
}

export default Results