import React from "react"

function Property() {
    return <div>
    <div>
        <label htmlFor="apartment-type">Apartment Type*</label>
        <select name="apartment-type" id="apartment-type">
            <option value="independentHouse">Independent House/Villa</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
        </select>

    </div>
    <div>
        <label htmlFor="bhk-type">BHK Type*</label>
        <select name="bhk-type" id="bhk-type">
            <option value="RHK">RHK</option>
            <option value="1BHK">1 BHK</option>
            <option value="2BHK">2 BHK</option>
            <option value="3BHK">3 BHK</option>
            <option value="4BHK">4 BHK</option>
        </select>
        <label htmlFor="floor">Floor*</label>
        <select name="floor" id="floor">
        <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10(Terrace)</option>
        </select>
        <label htmlFor="total-floor">Total Floor*</label>
        <select name="total-floor" id="total-floor">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
    </div>
    <div>
        <label htmlFor="property-age">Property Age*</label>
        <select name="property-age" id="property-age">
            <option value="above1">Newly Constructed</option>
            <option value="above2">More than 2 years</option>
            <option value="above3">More than 3 years</option>
            <option value="above5">More than 5 years</option>
            <option value="above8">More than 8 years</option>
            <option value="above10">More than 10 years</option>
        </select>
        <label htmlFor="facing">Facing*</label>
        <select name="facing" id="facing">
            <option value="east">East</option>
            <option value="west">West</option>
            <option value="north">North</option>
            <option value="south">South</option>
        </select>
    </div>
    <div className="built-area-input">
        <label htmlFor="built-area">Built Up Area (in Sq.ft)*</label>
        <input type="number" id="built-area" placeholder="In Sq.ft"/>
    </div>

    </div>
}

export default Property;