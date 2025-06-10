// import React, { useState, useRef, useEffect, createContext } from 'react'
// import houseImage from "../../../images/house.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { useNavigate } from "react-router-dom";
// import houseRentMap from "../../../images/google-maps-house-rent.png";
// import Button from "@mui/material/Button";
// import bridge from "../../../images/bridge.jpg"
// import axios from "axios"
// import "./Home.css"
// import areaCoordinates from '../../utils/cityCoordinates.jsx';

// function Home() {
//     const inputRef = useRef()
//     const navigate = useNavigate()
//     const [searchDetails, setSearchDetails] = useState({
//         city: "bangalore",
//         areaName: ""
//     })
//     const [message, setMessage] = useState(false)
//     const [isClicked, setIsClicked] = useState({
//         buyButton: false,
//         rentButton: true
//     })



//     const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
//         bounds: {
//             north: areaCoordinates[searchDetails.city].latitude + areaCoordinates[searchDetails.city].degrees,
//             south: areaCoordinates[searchDetails.city].latitude - areaCoordinates[searchDetails.city].degrees,
//             east: areaCoordinates[searchDetails.city].longitude + areaCoordinates[searchDetails.city].degrees,
//             west: areaCoordinates[searchDetails.city].longitude - areaCoordinates[searchDetails.city].degrees
//         },
//         strictBounds: true
//     })
//     autoComplete.addListener('place_changed', () => {
//         const place = autoComplete.getPlace()
//         if (!place.geometry || !place.geometry.location) {
//             setMessage(true)
//         }
//         if (place.geometry.viewport || place.geometry.location) {
//             setSearchDetails(prev => {
//                 return {
//                     ...prev,
//                     areaName: inputRef.current.value,
//                     latitude: place.geometry.location.lat(),
//                     longitude: place.geometry.location.lng()
//                 }
//             })
//         }
//     })

    

//     function handleSearchChange(event) {
//         const { name, value } = event.target;
//         setSearchDetails((prev) => {
//             return {
//                 ...prev,
//                 [name]: value
//             }
//         })
//     }

//     async function handleSearch() {
//         console.log(searchDetails)
//         try {
//             if (searchDetails.latitude && searchDetails.longitude) {
//                 const { city, areaName, latitude, longitude } = searchDetails;
//                 setMessage(false)
//                 navigate(`/results?city=${city}&area=${areaName}&lat=${latitude}&lng=${longitude}`)
//             } else {
//                 setMessage(true)
//             }
//         } catch (error) {

//         }

//     }
//     function postHomePostHouse() {
//         navigate("/owner")
//     }
//     return <div>
//         <div className="home-header">
//             <img className="house" src={houseImage} alt="House Image" />
//             <div className="disclaimer">
//                 <p>Discover the top real estate in India</p>
//                 <p className="description">Conceptualized over 20 years ago when technology wasn't ready. Real Estate analytics </p><p className="description"> has today bought together some of the best analytics, web designers, engineers.</p>
//             </div>
//         </div>
//         <div className="input-field">
//             <h2 style={{ marginBottom: "1rem", color: "black" }}>
//                 Search for your rent House
//             </h2>
//             <div className="input-city">
//                 <select name="city" id="cityRent" onChange={handleSearchChange}>
//                     <option value="bangalore" selected>Bangalore</option>
//                     <option value="chennai">Chennai</option>
//                     <option value="delhi">Delhi</option>
//                     <option value="hyderabad">Hyderabad</option>
//                     <option value="kolkata">Kolkata</option>
//                     <option value="mumbai">Mumbai</option>
//                     <option value="pune">Pune</option>
//                 </select>

//                 <span>
//                     <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
//                     <input className="input-text-city" type="text" name="areaName" ref={inputRef} onChange={handleSearchChange} placeholder="Type Area name" value={searchDetails.areaName} />
//                     <button className="search-implement" onClick={handleSearch}>
//                         Search
//                     </button>
//                 </span>
//             </div>
//             {message && <p style={{ color: "red", fontSize: "smaller", position: "relative", bottom: "1rem", left: "20rem" }}>Please select area name from suggestions</p>}

//         </div>
//         <div className="post-button-home-page">
//             <button onClick={postHomePostHouse} className="post-button-home">
//                 Start POSTING Your Ad For FREE
//             </button>
//         </div>
//     </div>
// }
// export default Home;



import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import areaCoordinates from "../../utils/cityCoordinates.jsx";
import { suggestedAreaName } from "../../utils/cityNameSuggestions.jsx";

function Home() {
    const inputRef = useRef();
    const navigate = useNavigate();
    const [searchDetails, setSearchDetails] = useState({
        city: "Bangalore",
        areaName: ""
    });
    const [message, setMessage] = useState(false);
    

    useEffect(() => {
        if (!window.google?.maps?.places || !inputRef.current) return;

        const autoComplete = new window.google.maps.places.Autocomplete(inputRef.current, {
            bounds: {
                north: areaCoordinates[searchDetails.city].latitude + areaCoordinates[searchDetails.city].degrees,
                south: areaCoordinates[searchDetails.city].latitude - areaCoordinates[searchDetails.city].degrees,
                east: areaCoordinates[searchDetails.city].longitude + areaCoordinates[searchDetails.city].degrees,
                west: areaCoordinates[searchDetails.city].longitude - areaCoordinates[searchDetails.city].degrees
            },
            strictBounds: true
        });

        autoComplete.addListener("place_changed", () => {
            const place = autoComplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                setMessage(true);
                return;
            }
            setSearchDetails(prev => ({
                ...prev,
                areaName: inputRef.current.value,
                latitude: place.geometry.location.lat(),
                longitude: place.geometry.location.lng()
            }));
            setMessage(false);
        });
    }, [searchDetails.city]);

    

    const handleSearchChange = (e) => {
        const { name, value } = e.target;
        setSearchDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSearch = () => {
        if (searchDetails.latitude && searchDetails.longitude) {
            const { city, areaName, latitude, longitude } = searchDetails;
            setMessage(false);
            navigate(`/results?city=${city}&area=${areaName}&lat=${latitude}&lng=${longitude}`);
        } else {
            setMessage(true);
        }
    };

    const postAd = () => navigate("/owner");

    const setQuickArea = (area) => {

        inputRef.current.value = area;
        inputRef.current.focus()
        setSearchDetails(prev => ({ ...prev, areaName: area }));
    };

    return (
        <div className="home-container">
            <header className="main-header">
                <h1>Find Your Next Home</h1>
                <p className="subheader">The smartest way to rent or buy property in India</p>
            </header>

            <section className="search-section">
                

                <div className="search-bar">
                    <select name="city" id="city" onChange={handleSearchChange} value={searchDetails.city}>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                    </select>

                    <span className="search-input">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                        <input
                            type="text"
                            name="areaName"
                            ref={inputRef}
                            onChange={handleSearchChange}
                            placeholder="Type Area name"
                            value={searchDetails.areaName}
                        />
                    </span>

                    <button onClick={handleSearch}>Search</button>
                </div>

                <p className="hint-text">Start typing an area like “HSR Layout”, “Andheri”, or “Banjara Hills”</p>
                {message && <p className="error-text">Please select area name from suggestions list</p>}

                <div className="popular-areas">
                    {suggestedAreaName[searchDetails.city].map((area) => (
                        <span key={area} onClick={() => setQuickArea(area)}>{area}</span>
                    ))}
                </div>
            </section>

            <section className="features-section">
                <div className="feature">
                    <h3>✅ Verified Listings</h3>
                    <p>No brokers, no spam. Only legit properties.</p>
                </div>
                <div className="feature">
                    <h3>🚀 Smart Filters</h3>
                    <p>Find exactly what you’re looking for in seconds.</p>
                </div>
                <div className="feature">
                    <h3>📣 Post for Free</h3>
                    <p>List your property with zero cost or hassle.</p>
                </div>
            </section>

            <div className="trusted-banner">
                Trusted by over <strong>10,000+</strong> owners and renters across India
            </div>

            <div className="post-button-wrapper">
                <button onClick={postAd}>Start Posting Your Ad — FREE</button>
            </div>
        </div>
    );
}

export default Home;
