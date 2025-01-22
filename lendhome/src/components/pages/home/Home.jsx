import React, { useState, useRef, useEffect, createContext } from 'react'
import houseImage from "../../../images/house.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import houseRentMap from "../../../images/google-maps-house-rent.png";
import Button from "@mui/material/Button";
import bridge from "../../../images/bridge.jpg"
import axios from "axios"
import "./Home.css"
import areaCoordinates from '../../utils/cityCoordinates.jsx';
export const resultContext = createContext()
function Home() {
    const inputRef = useRef()
    const navigate = useNavigate()
    const [searchDetails, setSearchDetails] = useState({
        city: "bangalore",
        areaName: ""
    })
    const [message, setMessage] = useState(false)
    const [isClicked, setIsClicked] = useState({
        buyButton: false,
        rentButton: true
    })



    const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        bounds: {
            north: areaCoordinates[searchDetails.city].latitude + areaCoordinates[searchDetails.city].degrees,
            south: areaCoordinates[searchDetails.city].latitude - areaCoordinates[searchDetails.city].degrees,
            east: areaCoordinates[searchDetails.city].longitude + areaCoordinates[searchDetails.city].degrees,
            west: areaCoordinates[searchDetails.city].longitude - areaCoordinates[searchDetails.city].degrees
        },
        strictBounds: true
    })
    autoComplete.addListener('place_changed', () => {
        const place = autoComplete.getPlace()
        if (!place.geometry || !place.geometry.location) {
            alert("Please select another nearby location")
        }
        if (place.geometry.viewport || place.geometry.location) {
            setSearchDetails(prev => {
                return {
                    ...prev,
                    areaName: inputRef.current.value,
                    latitude: place.geometry.location.lat(),
                    longitude: place.geometry.location.lng()
                }
            })
        }
    })

    function handleClick(event) {
        const buttonclicked = event.target.name;
        setIsClicked((buttonclicked === "buyButton") ? { buyButton: true, rentButton: false } : { buyButton: false, rentButton: true })
    }

    function handleSearchChange(event) {
        const { name, value } = event.target;
        setSearchDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    async function handleSearch() {
        console.log(searchDetails)
        try {
            if (searchDetails.latitude && searchDetails.longitude) {
                const { city, areaName, latitude, longitude } = searchDetails;
                setMessage(false)
                // const searchResult = await axios.post("http://localhost:8000/property/result", searchDetails, { withCredentials: true })
                navigate(`/results?city=${city}&area=${areaName}&lat=${latitude}&lng=${longitude}`)
            } else {
                setMessage(true)
            }
        } catch (error) {

        }

    }

    return <div>
        <div className="home-header">
            <img className="house" src={houseImage} alt="House Imae" />
            <div className="disclaimer">
                <p>Discover the top real estate in India</p>
                <p className="description">Conceptualized over 20 years ago when technology wasn't ready. Real Estate analytics </p><p className="description"> has today bought together some of the best analytics, web designers, engineers.</p>
            </div>
        </div>
        <div className="input-field">
            <button className="rent-button" style={!isClicked.rentButton ? { opacity: 0.6 } : { opacity: 1 }} name="rentButton" onClick={handleClick}>
                Rent
            </button>
            <button className="buy-button" style={!isClicked.buyButton ? { opacity: 0.6 } : { opacity: 1 }} name="buyButton" onClick={handleClick}>
                Buy
            </button>
            <h2 style={{ marginBottom: "1rem", color: "black" }}>
                {isClicked.rentButton ? "Search for your rent House" : "Search for your House Location"}
            </h2>
            <div className="input-city">
                <select name="city" id="cityRent" onChange={handleSearchChange}>
                    <option value="bangalore" selected>Bangalore</option>
                    <option value="chennai">Chennai</option>
                    <option value="delhi">Delhi</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="kolkata">Kolkata</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="pune">Pune</option>
                </select>

                <span>
                    <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                    <input className="input-text-city" type="text" name="areaName" ref={inputRef} onChange={handleSearchChange} placeholder="Type Area name" value={searchDetails.areaName} />
                    <button className="search-btn" onClick={handleSearch}>
                        Search
                    </button>
                </span>
            </div>
            {message && <p style={{ color: "red", fontSize: "smaller", position: "relative", bottom: "1rem", left: "20rem" }}>Please select area name from suggestions</p>}

        </div>
        <div className="about-container">
            <div className="about-thumb">
                <img src={houseRentMap} alt="google map house rent" />
            </div>
            <div className="about-content">
                <h3 className="about-heading">
                    About
                </h3>
                <div className="about-title">
                    <h2>
                        More than 1000 houses available for sell and sale in each state in INDIA
                    </h2>
                </div>
                <div className="about-description">
                    <p>
                        Lend Home is INDIA's largest property search portal and is the first place to start your property search. You can find and manage your favourites with ease.
                    </p>
                </div>
                <Button className="about-button" variant="contained" onClick={() => { navigate("/about") }} >
                    Learn More
                </Button>
            </div>
        </div>
        <div className="services-container">
            <div className="services-thumb">
                <img src={bridge} alt="bridge" />
            </div>
            <div className="services-content">
                <div className="services-heading">
                    <h3>Services </h3>
                </div>
                <div className="services-title">
                    <h2>
                        Promote your house for sell or just rent with our website
                    </h2>
                </div>
                <div className="services-description">
                    Our platform connects buyers, sellers, and renters with properties that match their needs and preferences.
                    There's no need for brokers anymore
                </div>
                <Button className="services-button" variant="contained" onClick={() => { navigate("/services") }}>
                    Services
                </Button>
            </div>
        </div>
    </div>
}
export default Home;