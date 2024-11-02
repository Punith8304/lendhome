import React, { useState } from "react"

function Schedule() {
    const [availability, setAvailability] = useState("everyday")
    function handleClick(availabilityType) {

        console.log(availabilityType)
        setAvailability(availabilityType)
    }
    const clickedStyle = {
        "backgroundColor": "#8ABFA3",
        "color": "white"
    }
    return <div>

        <div>
            Make house visits hassle-free by providing us your availability.
        </div>
        <div>
            <button name="everyday" style={availability === "everyday" ? clickedStyle : null} id="everyday" onClick={()=>handleClick("everyday")}>
                <pre>
                    Everyday
                    (Mon-Sun)
                </pre>
            </button>
            <button name="weekday" id="weekday" style={availability === "weekday" ? clickedStyle : null} onClick={()=>handleClick("weekday")}>
                <pre>
                    Weekday
                    (Mon-Fri)
                </pre>
            </button>
            <button name="weekend" id="weekend" style={availability === "weekend" ? clickedStyle : null} onClick={()=>handleClick("weekend")}>
                <pre>
                    Weekend
                    (Sat-Sun)
                </pre>
            </button>
        </div>
        <div>
             <p>
                Select time schedule.
             </p>
             <label htmlFor="start-schedule">Start Time</label>
             <select name="start-schedule" id="start-schedule">
                <option value="6to8">6AM - 8AM</option>
                <option value="8to10">8AM - 10AM</option>
                <option value="10to12">10AM - 12PM</option>
                <option value="12to14">12PM - 2PM</option>
                <option value="14to16">2PM - 4PM</option>
                <option value="16to18">4PM - 6PM</option>
                <option value="18to20">6PM - 8PM</option>
                <option value="20to22">8PM - 10PM</option>
                <option value="22to24">10PM -12AM</option>
             </select>
             <label htmlFor="end-schedule">End Time</label>
             <select name="end-schedule" id="end-schedule">
                <option value="9">9AM</option>
                <option value="12">12PM</option>
                <option value="15">3PM</option>
                <option value="18">6PM</option>
                <option value="21">9PM</option>
                <option value="24">12AM</option>
             </select>
             <p>s                
                <input type="checkbox" id="allday" name="allday" />
                <label htmlFor="allday">Available all day</label>
             </p>
        </div>
    </div>
}
export default Schedule;