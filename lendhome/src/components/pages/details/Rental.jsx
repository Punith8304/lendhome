import React from "react";
function Rental() {
    return <div>
        <div>
            Provide rental details about your property
        </div>
        <div>
            Property available for 
        </div>
        <div>
            <input type="radio" name="rentType" id="rent" value="rent" defaultChecked />
            <label htmlFor="rent">Rent</label>
            <input type="radio" name="rentType" id="lease" value="lease" />
            <label htmlFor="lease">Lease</label>
        </div>
        <div>
            <div>
                <label htmlFor="rent-money">Expected Rent(per month)* </label>
                <input type="number" id="rent-money" name="rent" placeholder="Enter rent per month" />
                <label htmlFor="deposit">Expected Deposit*</label>
            <input type="number" name="deposit" id="deposit" placeholder="Enter the amount" />
                
            </div>
            <div>
            <input type="checkbox" id="rent-negotiable" value="rent-negotiable" />
                <label htmlFor="rent-negotible">Rent Negotiable</label>
            </div>
            
        </div>
        <div>
            <label htmlFor="monthly-maintenance">Monthly Maintenance*</label>
             <select name="monthly-maintenance" defaultValue="Select" id="monthly-maintenance">
                <option value="included">Maintenace Included</option>
                <option value="extra">Maintenace Extra</option>
             </select>
           
        </div>
        <div>
            <label htmlFor="availability">Available From*</label>
            <input id="availability" type="date" name="availability-date"/>
        </div>
        <div>
            <p>Preferred Tenants*</p>
            <input type="checkbox" id="anyone" name="anyone" value="Anyone" defaultChecked/>
            <label htmlFor="anyone">Anyone</label>
            <input type="checkbox" id="family" name="family" value="Family"/>
            <label htmlFor="family">Family</label>
            <input type="checkbox" id="bachelor-female" name="bachelor-female" value="Bachelor Female"/>
            <label htmlFor="bachelor-female">Bachelor Female</label>
            <input type="checkbox" id="bachelor-male" name="bachelor-male" value="Bachelor Male"/>
            <label htmlFor="bachelor-male">Bachelor Male</label>
            <input type="checkbox" id="company" name="company" value="Company"/>
            <label htmlFor="company">Company</label>

        </div>
        <div>
            <label htmlFor="furnishing">Furnished*</label>
            <select name="furnishing" id="furnishing">
                <option value="full">Fully Furnished</option>
                <option value="semi">Semi Furnished</option>
                <option value="none">Unfurnished</option>
            </select>
            <label htmlFor="parking">Parking*</label>
            <select name="parking" id="parking">
                <option value="bike">Bike</option>
                <option value="Car">Car</option>
                <option value="both">Both</option>
                <option value="none">None</option>
            </select>
        </div>
        <div>
            <label htmlFor="description">Description*</label>
            <textarea name="description" id="description" style={{resize: "none"}} placeholder="Write a few lines about your property something which is special and makes your property stand out."></textarea>
        </div>
    </div>
}

export default Rental;