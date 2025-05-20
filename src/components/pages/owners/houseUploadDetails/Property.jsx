import React, { useState } from "react"
import NextPage from "../nexpage/NextPage.jsx";
import "./properties/Property.css";
function Property() {
    const floor = Array.from({ length: 9 }, (_, i) => i + 1)
    const [propertyDetails, setPropertyDetails] = useState({
        apartment_type: 1,
        house_type: 1,
        current_floor: 10,
        total_floor: 10,
        property_age: 1,
        house_facing: 1,
        area_builtup: 0
    })
    function handlePropertyDetailsChange(event) {
        const { name, value } = event.target;
        setPropertyDetails((prev) => {
            return {
                ...prev,
                [name]: Number(value)
            }
        })
        console.log(propertyDetails)
    }

    // return <div>
    //     <div>
    //         <label htmlFor="apartment-type">Apartment Type*</label>
    //         <select name="apartment_type" id="apartment-type" onChange={handlePropertyDetailsChange}>
    //             <option value="1" selected="selected">Independent House/Villa</option>
    //             <option value="2">House</option>
    //             <option value="3">Apartment</option>
    //         </select>

    //     </div>
    //     <div>
    //         <label htmlFor="bhk-type">BHK Type*</label>
    //         <select name="house_type" id="bhk-type" onChange={handlePropertyDetailsChange}>
    //             <option value="1" selected="selected">RHK</option>
    //             <option value="2">1 BHK</option>
    //             <option value="3">2 BHK</option>
    //             <option value="4">3 BHK</option>
    //             <option value="5">4 BHK</option>
    //         </select>
    //         <label htmlFor="floor">Floor*</label>
    //         <select name="current_floor" id="floor" onChange={handlePropertyDetailsChange}>
    //             {floor.map(value => <option value={value}>{value}</option>)}
    //             <option value="10" selected="selected">10(Terrace)</option>
    //         </select>
    //         <label htmlFor="total-floor">Total Floor*</label>
    //         <select name="total_floor" id="total-floor" onChange={handlePropertyDetailsChange}>
    //             {floor.map(value => <option value={value}>{value}</option>)}
    //             <option value="10" selected="selected">10</option>
    //         </select>
    //     </div>
    //     <div>
    //         <label htmlFor="property-age">Property Age*</label>
    //         <select name="property_age" id="property-age" onChange={handlePropertyDetailsChange}>
    //             <option value="1" selected="selected">Newly Constructed</option>
    //             <option value="2">More than 2 years</option>
    //             <option value="3">More than 3 years</option>
    //             <option value="4">More than 5 years</option>
    //             <option value="5">More than 8 years</option>
    //             <option value="6">More than 10 years</option>
    //         </select>
    //         <label htmlFor="facing">Facing*</label>
    //         <select name="house_facing" id="facing" onChange={handlePropertyDetailsChange}>
    //             <option value="1" selected="selected">East</option>
    //             <option value="2">West</option>
    //             <option value="3">North</option>
    //             <option value="4">South</option>
    //         </select>
    //     </div>
    //     <div className="built-area-input">
    //         <label htmlFor="built-area">Built Up Area (in Sq.ft)*</label>
    //         <input type="number" id="built-area" placeholder="In Sq.ft" name="area_builtup" onChange={handlePropertyDetailsChange} value={propertyDetails.built_area} required />
    //     </div>
    //     <NextPage details={propertyDetails} />
    // </div>


    return (
        <div className="property-form">
            <div className="property-group">
                <div>
                    <label htmlFor="apartment-type">Apartment Type*</label>
                    <select
                        name="apartment_type"
                        id="apartment-type"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.apartment_type}
                    >
                        <option value="1">Independent House/Villa</option>
                        <option value="2">House</option>
                        <option value="3">Apartment</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="bhk-type">BHK Type*</label>
                    <select
                        name="house_type"
                        id="bhk-type"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.house_type}
                    >
                        <option value="1">RHK</option>
                        <option value="2">1 BHK</option>
                        <option value="3">2 BHK</option>
                        <option value="4">3 BHK</option>
                        <option value="5">4 BHK</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="floor">Floor*</label>
                    <select
                        name="current_floor"
                        id="floor"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.current_floor}
                    >
                        {floor.map(value => (
                            <option value={value} key={value}>{value}</option>
                        ))}
                        <option value="10">10 (Terrace)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="total-floor">Total Floor*</label>
                    <select
                        name="total_floor"
                        id="total-floor"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.total_floor}
                    >
                        {floor.map(value => (
                            <option value={value} key={value}>{value}</option>
                        ))}
                        <option value="10">10</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="property-age">Property Age*</label>
                    <select
                        name="property_age"
                        id="property-age"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.property_age}
                    >
                        <option value="1">Newly Constructed</option>
                        <option value="2">More than 2 years</option>
                        <option value="3">More than 3 years</option>
                        <option value="4">More than 5 years</option>
                        <option value="5">More than 8 years</option>
                        <option value="6">More than 10 years</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="facing">Facing*</label>
                    <select
                        name="house_facing"
                        id="facing"
                        onChange={handlePropertyDetailsChange}
                        defaultValue={propertyDetails.house_facing}
                    >
                        <option value="1">East</option>
                        <option value="2">West</option>
                        <option value="3">North</option>
                        <option value="4">South</option>
                    </select>
                </div>

                <div className="built-area-input">
                    <label htmlFor="built-area">Built Up Area (in Sq.ft)*</label>
                    <input
                        type="number"
                        id="built-area"
                        placeholder="In Sq.ft"
                        name="area_builtup"
                        onChange={handlePropertyDetailsChange}
                        value={propertyDetails.area_builtup}
                        required
                    />
                </div>
            </div>

            <NextPage details={propertyDetails} />
        </div>
    );

}

export default Property;
