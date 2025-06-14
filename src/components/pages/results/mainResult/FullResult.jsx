// import React, { useEffect, useRef, useState, useContext } from "react"
// import "./FullResult.css"
// import Button from '@mui/material/Button'
// import axios from "axios"
// import { useLocation, useNavigate } from "react-router-dom";
// import { loginStatusContext } from "../../../../App.jsx";


// import { MdTableRestaurant, MdFamilyRestroom, MdBalcony, MdEmail } from "react-icons/md";
// import { FaBed, FaParking, FaBirthdayCake } from "react-icons/fa";
// import { GiFamilyHouse } from "react-icons/gi";
// import { BsCalendarDate } from "react-icons/bs";
// import { IoIosPerson } from "react-icons/io";
// import { FaMobileRetro } from "react-icons/fa6";
// import { ImMobile } from "react-icons/im";



// import ImageCarousel from "./ImageCarousel.jsx";



// function FullResult() {
//     const navigate = useNavigate()
//     const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
//     const [details, setDetails] = useState({
        // userDetails: {
        //     user_id: "",
        //     user_name: "",
        //     user_email: "",
        //     user_mobile: ""
        // },
        // propertyDetails: {
        //     current_floor: "",
        //     total_floor: "",
        //     area_builtup: "",
        //     apartment_type: "",
        //     house_type: "",
        //     property_age: "",
        //     facing_direction: ""
        // },
        // localityDetails: {
        //     city_name: "",
        //     area_name: "",
        //     street: ""
        // },
        // rentalDetails: {
        //     rental_id: "",
        //     expected_rent: "",
        //     deposit_amount: "",
        //     rent_negotiable: "",
        //     monthly_maintenance: "",
        //     available_from: "",
        //     preferred_tenants: "",
        //     furnished: "",
        //     parking: "",
        //     description: "",
        //     id: "",
        //     anyone: "",
        //     family: "",
        //     bachelor_female: "",
        //     bachelor_male: "",
        //     company: "",
        //     furnishedtype: "",
        //     parking_type: ""
        // },
        // amenitiesDetails: {
        //     amenities_id: "",
        //     bathrooms: "",
        //     balconies: "",
        //     water_supply: "",
        //     gym: "",
        //     non_veg: "",
        //     security: "",
        //     property_show: "",
        //     secondary_number: "",
        //     directions: "",
        //     additional_amenities: "",
        //     supply_type: "",
        //     shown: "",
        //     id: "",
        //     lift: "",
        //     air_condition: "",
        //     kids_play: "",
        //     servant_room: "",
        //     gas_pipeline: "",
        //     house_keeping: "",
        //     visitor_parking: "",
        //     internet_service: "",
        //     club: "",
        //     swimming_pool: "",
        //     fire_safety: "",
        //     ground: "",
        //     sewage_treatment: "",
        //     power_backup: "",
        //     shopping: ""
        // },
        // scheduleDetails: {
        //     schedule_id: "",
        //     available_day: "",
        //     start_time: "",
        //     end_time: "",
        //     available_allday: "",
        //     availability: ""
        // },
        // galleryDetails: []
//     })
//     const [preferredTypes, setPreferredTypes] = useState()
//     const [openSlider, setOpenSlider] = useState(false)
//     const location = useLocation()
//     async function handleAddToWishList() {
//         const querySearchParameter = new URLSearchParams(location.search)
//         const houseId = querySearchParameter.get("id")
//         const result = await axios.post(`${userAuthentication.apiEndPoint}/user-property/add-to-wishlist`, { houseId: houseId }, { withCredentials: true })
//         if (result.data.status === 200) {
//             navigate('/wish-list')
//         } else {
//             alert("Unable to add to favourites")
//         }
//     }
//     useEffect(() => {
//         (async function () {
//             const querySearchParameter = new URLSearchParams(location.search)
//             const houseId = querySearchParameter.get("id")
//             const result = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-full-house-details`, { houseId: houseId }, { withCredentials: true })
//             setDetails(result.data.data)
//         })()
//     }, [])

//     useEffect(() => {
//         if (details.rentalDetails.anyone) {
//             setPreferredTypes("Anyone")
//         } else {
//             const preferredTenants = {
//                 "family": details.rentalDetails.family,
//                 "bachelor female": details.rentalDetails.bachelor_female,
//                 "bachelor male": details.rentalDetails.bachelor_male,
//                 "company": details.rentalDetails.company
//             }
//             const objectKeys = Object.keys(preferredTenants)
//             const trueTenants = objectKeys.map(key => {
//                 if (preferredTenants[key]) {
//                     return key
//                 }
//             })
//             setPreferredTypes(trueTenants.join(","))
//             console.log(trueTenants.join(","))
//         }
//     }, [details])


//     {/*
//         userDetails: {
//             user_id: 14,
//             user_name: 'Punith',
//             user_email: 'punithkumar2864@gmail.com',
//             user_mobile: '7569639418'
//         }
//         propertyDetails: {
//             current_floor: 10,
//             total_floor: 10,
//             area_builtup: 0,
//             apartment_type: 'Independent House',
//             house_type: '1RHK',
//             property_age: 'above1',
//             facing_direction: 'East'
//         }
//         localityDetails: {
//             city_name: 'Bangalore',
//             area_name: 'Whitefield, Bengaluru, Karnataka, India',
//             street: 'hdsalfja'
//         }
//         rentalDetails: {
//             rental_id: 11,
//             expected_rent: 0,
//             deposit_amount: 0,
//             rent_negotiable: true,
//             monthly_maintenance: true,
//             available_from: 2025-01-26T18:30:00.000Z,
//             preferred_tenants: 20,
//             furnished: 1,
//             parking: 3,
//             description: '',
//             id: 20,
//             anyone: true,
//             family: true,
//             bachelor_female: true,
//             bachelor_male: true,
//             company: true,
//             furnishedtype: 'fully furnished',
//             parking_type: 'both car and bike'
//         }
//         amenitiesDetails: {
//             amenities_id: 36,
//             bathrooms: 2,
//             balconies: 2,
//             water_supply: 2,
//             gym: false,
//             non_veg: false,
//             security: false,
//             property_show: 2,
//             secondary_number: '7569639418',
//             directions: '',
//             additional_amenities: 42,
//             supply_type: 'municipal',
//             shown: 'myself',
//             id: 42,
//             lift: true,
//             air_condition: false,
//             kids_play: false,
//             servant_room: false,
//             gas_pipeline: false,
//             house_keeping: false,
//             visitor_parking: true,
//             internet_service: true,
//             club: false,
//             swimming_pool: false,
//             fire_safety: false,
//             ground: false,
//             sewage_treatment: false,
//             power_backup: true,
//             shopping: true
//         }
//         scheduleDetails: {
//             schedule_id: 10,
//             available_day: 1,
//             start_time: '6to9',
//             end_time: '9',
//             available_allday: false,
//             availability: 'mon-sun'
//         }
//         galleryDetails: {
//             images_id: 65,
//             images_array: [{
//                 path: 'C:\\Users\\punit\\Desktop\\Projects\\LendHome\\uploads\\8e47d694d34be2ec52e47e37fcbcec05',
//                 size: 336971,
//                 encoding: '7bit',
//                 filename: '8e47d694d34be2ec52e47e37fcbcec05',
//                 mimetype: 'image/png',
//                 fieldname: 'files',
//                 destination: 'C:/Users/punit/Desktop/Projects/LendHome/uploads',
//                 originalname: 'Screenshot (768).png'
//             }]
//         }
//     */}
//     return <div>
//         <div>
//             <div className="full-house-header">
//                 <h1 className="full-house-house-header">House Details</h1>
//                 <h1 className="full-house-owner-header">Owner Details</h1>
//             </div>
//             <div className="property-owner-house-details-main">
//                 <div className="property-details-full-house-card">
//                     <div>
//                         <div>
//                             <FaBed className="full-house-property-icons" /> {details.propertyDetails.house_type}
//                             <p>No. of Bed rooms</p>
//                         </div>
//                         <div>
//                             <MdFamilyRestroom className="full-house-property-icons" />{preferredTypes}
//                             <p>Preferred Tenant</p>
//                         </div>
//                         <div>
//                             <MdTableRestaurant className="full-house-property-icons" />furnished: {details.rentalDetails.furnishedType}
//                             <p>furniture</p>
//                         </div>
//                         <div>
//                             <MdBalcony className="full-house-property-icons" /> {details.amenitiesDetails.balconies}
//                             <p>Balcony</p>
//                         </div>
//                     </div>
//                     <div>
//                         <div>
//                             <GiFamilyHouse className="full-house-property-icons" />{details.propertyDetails.apartment_type}
//                             <p>House type</p>
//                         </div>
//                         <div>
//                             <BsCalendarDate className="full-house-property-icons" />{details.rentalDetails.available_from.split('T')[0]}
//                             <p>Available from</p>
//                         </div>
//                         <div>
//                             <FaParking className="full-house-property-icons" />{details.rentalDetails.parking_type}
//                             <p>parking</p>
//                         </div>
//                         <div>
//                             <FaBirthdayCake className="full-house-property-icons" /> {details.propertyDetails.property_age}
//                             <p>property age(years)</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div id="owner-details" className="property-details-owner-card">
//                     <div className="full-house-owner-header-keys">
//                         <div><IoIosPerson className="full-house-property-owner-icons" />Name: </div>
//                         <div><FaMobileRetro className="full-house-property-owner-icons" />Mobile Number:</div>
//                         <div><ImMobile className="full-house-property-owner-icons" />Secondary number: </div>
//                         <div><MdEmail className="full-house-property-owner-icons" />Email:</div>
//                     </div>
//                     <div className="full-house-owner-header-values">
//                         <div>{details.userDetails.user_name}</div>
//                         <div>{details.userDetails.user_mobile}</div>
//                         <div>{details.amenitiesDetails.secondary_number}</div>
//                         <div>{details.userDetails.user_email}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr className="horizontal-line-full-house" />
//         <div>
//             <div className="full-house-header">
//                 <h1>Rental Details</h1>
//                 <h1>Interior</h1>
//             </div>
//             <div className="property-owner-house-details-main">
//                 <div className="property-details-owner-card-rental">
//                     <div className="full-house-owner-header-keys">
//                         <div>expected-rent: </div>
//                         <div>deposited-amount: </div>
//                         <div>rent-negotiable</div>
//                         <div>monthly-maintanance</div>
//                     </div>
//                     <div className="full-house-owner-header-values">
//                         <div>{details.rentalDetails.expected_rent}</div>
//                         <div>{details.rentalDetails.deposit_amount}</div>
//                         <div>{details.rentalDetails.rent_negotiable}</div>
//                         <div>{details.rentalDetails.monthly_maintenace}</div>
//                     </div>
//                 </div>
//                 <div className="property-details-owner-card-interior">
//                     <div className="full-house-owner-header-keys">
//                         <div>bathrooms:</div>
//                         <div>floor: </div>
//                         <div>total floors: </div>
//                         <div>facing: </div>
//                     </div>
//                     <div className="full-house-owner-header-values">
//                         <div>{details.amenitiesDetails.bathrooms}</div>
//                         <div>{details.propertyDetails.current_floor}</div>
//                         <div>{details.propertyDetails.total_floor}</div>
//                         <div>{details.propertyDetails.facing_direction}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr className="horizontal-line-full-house" />
//         <div>
//             <div className="full-house-header">
//                 <h1>Addtional Information</h1>
//                 <h1>Additional Amenities</h1>
//             </div>
//             <div className="property-owner-house-details-main">
//                 <div className="property-details-owner-card-rental">
//                     <div className="full-house-owner-header-keys">
//                         <div>water-supply: </div>
//                         <div>non-veg:</div>
//                         <div>gym: </div>
//                         <div>gated-security: </div>
//                     </div>
//                     <div className="full-house-owner-header-values">
//                         <div>{details.amenitiesDetails.supply_type}</div>
//                         <div>{details.amenitiesDetails.non_veg}</div>
//                         <div>{details.amenitiesDetails.gym}</div>
//                         <div>{details.amenitiesDetails.security}</div>
//                     </div>
//                 </div>
//                 <div className="property-details-owner-card-interior">
//                     <div className="full-house-owner-header-keys">
//                         <div>lift:</div>
//                         <div>play area for kids: </div>
//                         <div>pipeline: </div>
//                         <div>fire safety: </div>
//                         <div>Internet</div>
//                     </div>
//                     <div className="full-house-owner-header-values">
//                         <div>{details.amenitiesDetails.lift}</div>
//                         <div>{details.amenitiesDetails.kids_play}</div>
//                         <div>{details.amenitiesDetails.gas_pipeline}</div>
//                         <div>{details.amenitiesDetails.fire_safety}</div>
//                         <div>{details.amenitiesDetails.internet_service}</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <hr className="horizontal-line-full-house" />
//         <div>
//             <div className="full-house-address-component">
//                 <div>
//                     <h1>Address</h1>
//                 </div>
//                 <div className="full-house-address-components-full-address">
//                     <table className="full-house-address-table">
//                         <tr>
//                             <td>City</td>
//                             <td>{details.localityDetails.city_name}</td>
//                         </tr>
//                         <tr>
//                             <td>Area</td>
//                             <td className="table-address-data">{details.localityDetails.area_name}</td>
//                         </tr>
//                         <tr>
//                             <td>Landmark</td>
//                             <td className="table-address-data">{details.localityDetails.street}</td>
//                         </tr>
//                     </table>
//                 </div>
//             </div>
//             <div className="full-house-direction-tips">
//                 <h1>Direction tips</h1>
//                 <div className="direction-tips-full-house-result">
//                     {details.amenitiesDetails.directions}
//                 </div>
//             </div>
//         </div>
//         <hr className="horizontal-line-full-house" />
//         <div className="full-house-address-component">
//             <div>
//                 <h1>Schedule to visit</h1>
//             </div>
//             <div className="full-house-address-components-full">
//                 <div className="full-house-owner-header-keys">
//                     <div>availability:</div>
//                     <div>start-time: </div>
//                     <div>end-time: </div>
//                     <div>property showed by: </div>
//                 </div>
//                 <div className="full-house-owner-header-values">
//                     <div>{details.scheduleDetails.available_day ? "Everyday" : details.scheduleDetails.availability}</div>
//                     <div>{details.scheduleDetails.start_time}</div>
//                     <div>{details.scheduleDetails.end_time}</div>
//                     <div>{details.amenitiesDetails.shown}</div>
//                 </div>
//             </div>
//         </div>
//         <hr className="horizontal-line-full-house" />
//         <div>
//             <div className="property-full-result-property-decription">
//                 <h2>What makes our property special (description)</h2>
//                 <p>{details.rentalDetails.description}</p>
//             </div>
//             <hr className="images-horizontal-line" />
//             <div className="full-house-result-images">
//                 <h2>Property Images</h2>
//                 <div>
//                     <ImageCarousel imagesData={details.galleryDetails} />
//                 </div>
//             </div>
//         </div>
//         <div style={{ textAlign: "center", margin: "1rem auto" }}>
//             <Button variant="contained" onClick={handleAddToWishList}>Add to Wishlist</Button>
//             <a style={{ margin: "auto 1rem" }} href="#owner-details"><Button variant="contained">Get Owner Details</Button></a>
//         </div>
//     </div>
// }
// export default FullResult



// src/components/FullResult.jsx
import React, { useEffect, useState, useContext } from "react";
import "./FullResult.css";
// import Button from '@mui/material/Button';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { loginStatusContext } from "../../../../App.jsx";

import { MdTableRestaurant, MdFamilyRestroom, MdBalcony, MdEmail } from "react-icons/md";
import { FaBed, FaParking, FaBirthdayCake } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { BsCalendarDate } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { FaMobileRetro } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";

import ImageCarousel from "./ImageCarousel.jsx";

function FullResult() {
    const navigate = useNavigate();
    const { userAuthentication } = useContext(loginStatusContext);
    const [checkWishlist, setCheckWishlist] = useState(false)
    const [details, setDetails] = useState({ 
                userDetails: {
            user_id: "",
            user_name: "",
            user_email: "",
            user_mobile: ""
        },
        propertyDetails: {
            current_floor: "",
            total_floor: "",
            area_builtup: "",
            apartment_type: "",
            house_type: "",
            property_age: "",
            facing_direction: ""
        },
        localityDetails: {
            city_name: "",
            area_name: "",
            street: ""
        },
        rentalDetails: {
            rental_id: "",
            expected_rent: "",
            deposit_amount: "",
            rent_negotiable: "",
            monthly_maintenance: "",
            available_from: "",
            preferred_tenants: "",
            furnished: "",
            parking: "",
            description: "",
            id: "",
            anyone: "",
            family: "",
            bachelor_female: "",
            bachelor_male: "",
            company: "",
            furnishedType: "",
            parking_type: ""
        },
        amenitiesDetails: {
            amenities_id: "",
            bathrooms: "",
            balconies: "",
            water_supply: "",
            gym: "",
            non_veg: "",
            security: "",
            property_show: "",
            secondary_number: "",
            directions: "",
            additional_amenities: "",
            supply_type: "",
            shown: "",
            id: "",
            lift: "",
            air_condition: "",
            kids_play: "",
            servant_room: "",
            gas_pipeline: "",
            house_keeping: "",
            visitor_parking: "",
            internet_service: "",
            club: "",
            swimming_pool: "",
            fire_safety: "",
            ground: "",
            sewage_treatment: "",
            power_backup: "",
            shopping: ""
        },
        scheduleDetails: {
            schedule_id: "",
            available_day: "",
            start_time: "",
            end_time: "",
            available_allday: "",
            availability: ""
        },
        galleryDetails: []
    });
    const [preferredTypes, setPreferredTypes] = useState();
    const location = useLocation();

    useEffect(() => {
        (async function () {
            const houseId = new URLSearchParams(location.search).get("id");
            const result = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-full-house-details`, { houseId }, { withCredentials: true });
            setDetails(result.data.data);
        })();
    }, []);

    useEffect(() => {
        if (details.rentalDetails.anyone) {
            setPreferredTypes("Anyone");
        } else {
            const tenants = {
                "Family": details.rentalDetails.family,
                "Bachelor (F)": details.rentalDetails.bachelor_female,
                "Bachelor (M)": details.rentalDetails.bachelor_male,
                "Company": details.rentalDetails.company
            };
            const trueTenants = Object.keys(tenants).filter(k => tenants[k]);
            setPreferredTypes(trueTenants.join(", "));
        }
    }, [details]);

    async function handleAddToWishList() {
        const houseId = new URLSearchParams(location.search).get("id");
        const result = await axios.post(`${userAuthentication.apiEndPoint}/user-property/add-to-wishlist`, { houseId }, { withCredentials: true });
        !result.data.status === 200 && alert("Unable to add to favourites. Try again");
    }

    const removeFromWishList = async () => {
            try {
                const houseId = new URLSearchParams(location.search).get("id");
                const result = await axios.post(
                    `${userAuthentication.apiEndPoint}/user-property/remove-from-wishlist`,
                    { houseId },
                    { withCredentials: true }
                )
                if (result.data.status) {
                    setCheckWishlist(false)
                } else {
                    alert("Unable to remove from favourites")
                }
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() => {
            (async function () {
                const houseId = new URLSearchParams(location.search).get("id");
                const result = await axios.post(
                    `${userAuthentication.apiEndPoint}/user-property/check-wishlist`,
                    { houseId },
                    { withCredentials: true }
                );
                if (result.data.exist) {
                    setCheckWishlist(true)
                }
            })()
        }, [])

    return (
        <div className="full-result-container">
            <section className="header">
                <h1>Property Overview</h1>
                <div className="overview">
                    <div className="info-grid">
                        <div><FaBed /> {details.propertyDetails.house_type}<span>Bedrooms</span></div>
                        <div><MdFamilyRestroom /> {preferredTypes}<span>Preferred Tenant</span></div>
                        <div><MdTableRestaurant /> {details.rentalDetails.furnishedtype}<span>Furnishing</span></div>
                        <div><MdBalcony /> {details.amenitiesDetails.balconies}<span>Balconies</span></div>
                        <div><GiFamilyHouse /> {details.propertyDetails.apartment_type}<span>Apartment Type</span></div>
                        <div><BsCalendarDate /> {details.rentalDetails.available_from?.split('T')[0]}<span>Available From</span></div>
                        <div><FaParking /> {details.rentalDetails.parking_type}<span>Parking</span></div>
                        <div><FaBirthdayCake /> {details.propertyDetails.property_age}<span>Age (years)</span></div>
                    </div>
                    <div className="owner-card" id="owner-details">
                        <h2>Owner Details</h2>
                        <ul>
                            <li><IoIosPerson /> {details.userDetails.user_name}</li>
                            <li><FaMobileRetro /> {details.userDetails.user_mobile}</li>
                            <li><ImMobile /> {details.amenitiesDetails.secondary_number}</li>
                            <li><MdEmail /> {details.userDetails.user_email}</li>
                        </ul>
                        <div>
                            <button className="button button-wishlist secondary-wishlist-button" onClick={checkWishlist ? removeFromWishList : handleAddToWishList}>{checkWishlist ? "Remove from Wishlist" : "Add to Wishlist</button"} </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>Rental & Interior Details</h2>
                <div className="info-grid">
                    <div><strong>Expected Rent:</strong> ₹{details.rentalDetails.expected_rent}</div>
                    <div><strong>Deposit:</strong> ₹{details.rentalDetails.deposit_amount}</div>
                    <div><strong>Negotiable:</strong> {details.rentalDetails.rent_negotiable}</div>
                    <div><strong>Maintenance:</strong> ₹{details.rentalDetails.monthly_maintenance}</div>
                    <div><strong>Bathrooms:</strong> {details.amenitiesDetails.bathrooms}</div>
                    <div><strong>Current Floor:</strong> {details.propertyDetails.current_floor}</div>
                    <div><strong>Total Floors:</strong> {details.propertyDetails.total_floor}</div>
                    <div><strong>Facing:</strong> {details.propertyDetails.facing_direction}</div>
                </div>
            </section>

            <section className="section">
                <h2>Amenities & Lifestyle</h2>
                <div className="info-grid">
                    <div><strong>Water Supply:</strong> {details.amenitiesDetails.supply_type}</div>
                    <div><strong>Non-veg Allowed:</strong> {details.amenitiesDetails.non_veg}</div>
                    <div><strong>Gym:</strong> {details.amenitiesDetails.gym}</div>
                    <div><strong>Security:</strong> {details.amenitiesDetails.security}</div>
                    <div><strong>Lift:</strong> {details.amenitiesDetails.lift}</div>
                    <div><strong>Kids Play Area:</strong> {details.amenitiesDetails.kids_play}</div>
                    <div><strong>Gas Pipeline:</strong> {details.amenitiesDetails.gas_pipeline}</div>
                    <div><strong>Fire Safety:</strong> {details.amenitiesDetails.fire_safety}</div>
                    <div><strong>Internet:</strong> {details.amenitiesDetails.internet_service}</div>
                </div>
            </section>

            <section className="section">
                <h2>Address</h2>
                <p><strong>City:</strong> {details.localityDetails.city_name}</p>
                <p><strong>Area:</strong> {details.localityDetails.area_name}</p>
                <p><strong>Landmark:</strong> {details.localityDetails.street}</p>
                <h2>Direction Tips</h2>
                <p>{details.amenitiesDetails.directions}</p>
            </section>

            <section className="section">
                <h2>Schedule a Visit</h2>
                <div className="info-grid">
                    <div><strong>Availability:</strong> {details.scheduleDetails.available_day ? "Everyday" : details.scheduleDetails.availability}</div>
                    <div><strong>Start Time:</strong> {details.scheduleDetails.start_time}</div>
                    <div><strong>End Time:</strong> {details.scheduleDetails.end_time}</div>
                    <div><strong>Showed By:</strong> {details.amenitiesDetails.shown}</div>
                </div>
            </section>

            <section className="section">
                <h2>Property Description</h2>
                <p>{details.rentalDetails.description}</p>
            </section>

            <section className="section">
                <h2>Gallery</h2>
                <ImageCarousel imagesData={details.galleryDetails} />
            </section>

            <div className="action-buttons">
                
                <button className="button button-wishlist" onClick={checkWishlist ? removeFromWishList : handleAddToWishList}>{checkWishlist ? "Remove from Wishlist" : "Add to Wishlist"} </button>
                <a href="#owner-details"><button className="button button-owner" style={{ marginLeft: "1rem" }}>Get Owner Details</button></a>
            </div>
        </div>
    );
}

export default FullResult;
