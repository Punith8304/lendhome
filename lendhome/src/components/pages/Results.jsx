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
                2BHK House for rent in Gachibowli
            </h3>
            <p>
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
            <div style={{border: "1px grey solid", borderStyle: "double", margin: "1.5"}}>

            </div>
        </div>

    </div>
}

export default Results