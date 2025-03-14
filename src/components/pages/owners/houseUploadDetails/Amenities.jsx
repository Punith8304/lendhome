import React, { useState } from "react"
import { Button } from "@mui/material"
import NextPage from "../nexpage/NextPage.jsx"
import "../houseUploadLayout/Properties.css";
function Amenities() {
    const [amenities, setAmenities] = useState({
        bathrooms: 2,
        balconies: 2,
        gym: false,
        non_veg: false,
        security: false,
        water_supply: 2,
        property_show: 2,
        secondary_number: "",
        directions: "",
        additional_amenities: {
            lift: true,
            air_condition: false,
            kids_play: false,
            servant_room: false,
            gas_pipeline: false,
            house_keeping: false,
            visitor_parking: true,
            internet_service: true,
            club: false,
            swimming_pool: false,
            fire_safety: false,
            shopping: true,
            ground: false,
            sewage_treatment: false,
            power_backup: true
        }
    })
    function amenitiesChange(event) {
        const { name, value } = event.target
        setAmenities(prev => {
            if (name === "directions") {
                return {
                    ...prev,
                    [name]: value
                }
            } else {
                return {
                    ...prev,
                    [name]: !isNaN(value) ? Number(value) : value === "true"
                }
            }
        })
        console.log(amenities)
    }
    function additionalAmenitiesChange(event) {
        const { name, checked } = event.target;
        setAmenities(prev => {
            return {
                ...prev,
                additional_amenities: {
                    ...prev.additional_amenities,
                    [name]: checked
                }
            }
        })
        console.log(amenities)
    }
    return <div>
        <p>
            Provide additional details about your property to get maximum visibility
        </p>
        <div>
            <label htmlFor="bathroom">Bathrooms*</label>
            <input type="number" id="bathroom" name="bathrooms" placeholder="Enter no.of Bathrooms" value={amenities.bathrooms} onChange={amenitiesChange} />
            <label htmlFor="balcony">Balconies*</label>
            <input type="number" id="balcony" name="balconies" placeholder="Enter no.of Balconies" value={amenities.balconies} onChange={amenitiesChange} />
            <label htmlFor="water-supply">Water Supply*</label>
            <select name="water_supply" id="water-supply" value={amenities.water_supply} onChange={amenitiesChange} >
                <option value="1">Borewell</option>
                <option value="2">Municipal (City)</option>
                <option value="3">Tanker</option>
                <option value="4">Open well</option>
                <option value="5">Community or Society</option>
            </select>
        </div>
        <div>
            <table>
                <tr>
                    <td>
                        Gym*
                    </td>
                    <td>
                        <input type="radio" name="gym" id="yes" value="true" checked={amenities.gym === true} onChange={amenitiesChange} />
                        <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                        <input type="radio" name="gym" id="no" value="false" checked={amenities.gym === false} onChange={amenitiesChange} />
                        <label htmlFor="no">No</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Non-Veg allowed*</span>
                    </td>
                    <td>
                        <input type="radio" name="non_veg" id="yes" value="true" checked={amenities.non_veg === true} onChange={amenitiesChange} />
                        <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                        <input type="radio" name="non_veg" id="no" value="false" checked={amenities.non_veg === false} onChange={amenitiesChange} />
                        <label htmlFor="no">No</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>Gated Security*</span>
                    </td>
                    <td>
                        <input type="radio" name="security" id="yes" value="true" checked={amenities.security === true} onChange={amenitiesChange} />
                        <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                        <input type="radio" name="security" id="no" value="false" checked={amenities.security === false} onChange={amenitiesChange} />
                        <label htmlFor="no">No</label>
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <label htmlFor="property-show">Who will show the property*</label>
            <select name="property_show" id="property-show" value={amenities.property_show} onChange={amenitiesChange}>
                <option value="1">Need Help</option>
                <option value="2">I will show</option>
                <option value="3">Neighbours</option>
                <option value="4">Friends/Relatives</option>
                <option value="5">Security</option>
                <option value="6">Tenants</option>
                <option value="7">Others</option>
            </select>
            <label htmlFor="secondary-number">Secondary Number</label>
            <input type="number" id="secondary-number" name="secondary_number" placeholder="Enter your number" value={amenities.secondary_number} onChange={amenitiesChange} />
        </div>
        <div>
            <label htmlFor="direction">Add direction tips for your tenants*</label>
            <textarea name="directions" id="direction" style={{ resize: "none" }} value={amenities.directions} placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..." onChange={amenitiesChange}></textarea>
        </div>
        <div className="available-amenities">
            <p>
                Select the available Amenities*
            </p>
            <div>
                <div>
                    <input type="checkbox" id="lift" name="lift" value="lift" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.lift} />
                    <label htmlFor="lift">Lift</label>
                </div>
                <div>
                    <input type="checkbox" id="air-condition" name="air_condition" value="air_condition" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.air_condition} />
                    <label htmlFor="air-condition">Air condition</label>
                </div>
                <div>
                    <input type="checkbox" id="kid-play-area" name="kids_play" value="kids_play" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.kids_play} />
                    <label htmlFor="kid-play-area">Kids play area</label>
                </div>
                <div>
                    <input type="checkbox" id="servant-room" name="servant_room" value="servant_room" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.servant_room} />
                    <label htmlFor="">Servant room</label>
                </div>
                <div>
                    <input type="checkbox" id="gas" name="gas_pipeline" value="gas_pipeline" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.gas_pipeline} />
                    <label htmlFor="gas">Gas pipeline</label>
                </div>
                <div>
                    <input type="checkbox" id="house-keep" name="house_keeping" value="house_keeping" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.house_keeping} />
                    <label htmlFor="house-keep">House keeping</label>
                </div>
                <div>
                    <input type="checkbox" id="visitor-parking" name="visitor_parking" value="visitor_parking" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.visitor_parking} />
                    <label htmlFor="visitor-parking">Visitor parking</label>
                </div>
                <div>
                    <input type="checkbox" id="internet" name="internet_service" value="internet_service" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.internet_service} />
                    <label htmlFor="internet">Internet Services</label>
                </div>
                <div>
                    <input type="checkbox" id="club" name="club" value="club" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.club} />
                    <label htmlFor="club">club house</label>
                </div>
                <div>
                    <input type="checkbox" id="swimming" name="swimming_pool" value="swimming_pool" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.swimming_pool} />
                    <label htmlFor="swimming">Swimming Pool</label>
                </div>
                <div>
                    <input type="checkbox" id="fire-safety" name="fire_safety" value="fire_safety" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.fire_safety} />
                    <label htmlFor="fire-safety">Fire safety</label>
                </div>
                <div>
                    <input type="checkbox" id="shopping" name="shopping" value="shopping" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.shopping} />
                    <label htmlFor="shopping">Shopping center</label>
                </div>
                <div>
                    <input type="checkbox" id="ground" name="ground" value="ground" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.ground} />
                    <label htmlFor="ground">Ground</label>
                </div>
                <div>
                    <input type="checkbox" id="sewage-plant" name="sewage_treatment" value="sewage_treatment" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.sewage_treatment} />
                    <label htmlFor="sewage-plant">Sewage treatment plant</label>
                </div>
                <div>
                    <input type="checkbox" id="power" name="power_backup" value="power_backup" onChange={additionalAmenitiesChange} checked={amenities.additional_amenities.power_backup} />
                    <label htmlFor="power">Power Backup</label>
                </div>
            </div>
        </div>
        {!amenities.secondary_number ? <Button variant="contained" onClick={() => alert("Enter secondary number")}>
            Save & next
        </Button> : <NextPage details={amenities} />}
    </div>
}

export default Amenities