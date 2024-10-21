import React from "react"

function Amenitites() {
    return <div>
        <p>
            Provide additional details about your property to get maximum visibility
        </p>
        <div>
            <label htmlFor="bathroom">Bathrooms*</label>
            <input type="number" id="bathroom" name="bathroom" placeholder="Enter no.of Bathrooms" min="0" />
            <label htmlFor="balcony">Balconies*</label>
            <input type="number" id="balcony" name="balcony" placeholder="Enter no.of Balconies" min="0" />
            <label htmlFor="water-supply">Water Supply*</label>
            <select name="water-supply" id="water-supply">
                <option value="borewell">Borewell</option>
                <option value="minicipal">Municipal (City)</option>
                <option value="tanker">Tanker</option>
                <option value="open_well">Open well</option>
                <option value="society">Community or Society</option>
            </select>
        </div>
        <div>
            <table>
                <tr>
                    <td>
                        Gym*
                    </td>
                    <td>
                        <input type="radio" name="gym" id="yes" />
                        <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                        <input type="radio" name="gym" id="no" />
                        <label htmlFor="no">No</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span>Non-Veg allowed*</span>
                    </td>
                    <td>
                    <input type="radio" name="gym" id="yes" />
                    <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                    <input type="radio" name="gym" id="no" />
                    <label htmlFor="no">No</label>
                    </td>
                </tr>
                <tr>
                    <td>
                    <span>Gated Security*</span>
                    </td>
                    <td>
                    <input type="radio" name="gym" id="yes" />
                    <label htmlFor="yes">Yes</label>
                    </td>
                    <td>
                    <input type="radio" name="gym" id="no" />
                    <label htmlFor="no">No</label>
                    </td>
                </tr>
            </table>
        </div>
        
        <div>
            <label htmlFor="property-show">Who will show the property*</label>
            <select name="property-show" id="property-show">
                <option value="help">Need Help</option>
                <option value="myself">I will show</option>
                <option value="neighbour">Neighbours</option>
                <option value="relatives">Friends/Relatives</option>
                <option value="security">Security</option>
                <option value="tenants">Tenants</option>
                <option value="other">Others</option>
            </select>
            <label htmlFor="secondary-number">Secondary Number</label>
            <input type="number" id="secondary-number" name="secondary-number" placeholder="Enter your number" />
        </div>
        <div>
            <label htmlFor="direction">Add direction tips for your tenants*</label>
            <textarea name="direction" id="direction" style={{ resize: "none" }} placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."></textarea>
        </div>
        <div className="available-amenities">
            <p>
                Select the available Amenities*
            </p>
            <input type="checkbox" id="lift" name="lift" />
            <label htmlFor="lift">Lift</label>
            <input type="checkbox" id="air-condition" name="air-condition" />
            <label htmlFor="air-condition">Air condition</label>
            <input type="checkbox" id="kid-play-area" name="kid-play-area" />
            <label htmlFor="kid-play-area">Kids play area</label>
            <input type="checkbox" id="servant-room" name="servant-room" />
            <label htmlFor="">Servant room</label>
            <input type="checkbox" id="gas" name="gas" />
            <label htmlFor="gas">Gas pipeline</label>
            <input type="checkbox" id="house-keep" name="house-keep" />
            <label htmlFor="house-keep">House keeping</label>
            <input type="checkbox" id="visitor-parking" name="visitor-parking" />
            <label htmlFor="visitor-parking">Visitor parking</label>
            <input type="checkbox" id="internet" name="internet" />
            <label htmlFor="internet">Internet Services</label>
            <input type="checkbox" id="club" name="club" />
            <label htmlFor="club">club house</label>
            <input type="checkbox" id="swimming" name="swimming" />
            <label htmlFor="swimming">Swimming Pool</label>
            <input type="checkbox" id="fire-safety" name="fire-safety" />
            <label htmlFor="fire-safety">Fire safety</label>
            <input type="checkbox" id="shopping" name="shopping" />
            <label htmlFor="shopping">Shopping center</label>
            <input type="checkbox" id="ground" name="ground" />
            <label htmlFor="ground">Ground</label>
            <input type="checkbox" id="sewage-plant" name="sewage-plant" />
            <label htmlFor="sewage-plant">Sewage treatment plant</label>
            <input type="checkbox" id="power" name="power" />
            <label htmlFor="power">Power Backup</label>
        </div>
    </div>
}

export default Amenitites;