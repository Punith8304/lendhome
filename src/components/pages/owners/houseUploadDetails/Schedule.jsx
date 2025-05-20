// import React, { useEffect, useState } from "react"
// import NextPage from "../nexpage/NextPage.jsx";
// import Button from '@mui/material/Button';
// import "../houseUploadLayout/Properties.css";
// function Schedule() {
//     const [scheduleDetails, setScheduleDetails] = useState({
//         available_day: 1,
//         start_time: "6to9",
//         end_time: "9",
//         available_allday: false
//     })
//     function handleScheduleChange(event) {
//         const { name, value } = event.target;
//         console.log(name, value)
//         setScheduleDetails(prev => {
//             return { ...prev,
//                 [name]: (name === "available_day" ? Number(value) : (name === "available_allday" ? !prev.available_allday : value))
//             }
//         })
//     }
//     useEffect(() => {
//         console.log(scheduleDetails)
//     }, [scheduleDetails])
//     const scheduleClickStyle = {
//         backgroundColor: "#8ABFA3",
//         color: "white"
//     }
//     return <div>

//         <div>
//             Make house visits hassle-free by providing us your availability.
//         </div>
//         <div>
//             <button name="available_day" id="everyday" style={scheduleDetails.available_day === 1 ? scheduleClickStyle : null} value="1" onClick={handleScheduleChange}>
//                     Everyday
//                     (Mon-Sun)
//             </button>
//             <button name="available_day" id="weekday" style={scheduleDetails.available_day === 2 ? scheduleClickStyle : null} value="2" onClick={handleScheduleChange}>
//                     Weekday
//                     (Mon-Fri)
//             </button>
//             <button name="available_day" id="weekend" style={scheduleDetails.available_day === 3 ? scheduleClickStyle : null} value="3" onClick={handleScheduleChange}>
//                     Weekend
//                     (Sat-Sun)
//             </button>
//         </div>
//         <div>
//             <p>
//                 Select time schedule.
//             </p>
//             <label htmlFor="start-schedule">Start Time</label>
//             <select name="start_time" id="start-schedule" onChange={handleScheduleChange} value={scheduleDetails.available_allday ? "allday" : null}>
//                 <option value="6" defaultValue>6AM</option>
//                 <option value="9">9AM</option>
//                 <option value="12">12AM</option>
//                 <option value="15">3PM</option>
//                 <option value="allday" selected={scheduleDetails.available_allday} >All Day</option>
//             </select>
//             <label htmlFor="end-schedule">End Time</label>
//             <select name="end_time" id="end-schedule" onChange={handleScheduleChange} value={scheduleDetails.available_allday ? "allday" : null}>
//                 <option value="9" defaultValue>9AM</option>
//                 <option value="12">12PM</option>
//                 <option value="15">3PM</option>
//                 <option value="18">6PM</option>
//                 <option value="20">8PM</option>
//                 <option value="allday" selected={scheduleDetails.available_allday} >All Day</option>
//             </select>
//             <p>
//                 <input type="checkbox" id="allday" name="available_allday" value="allday" onChange={handleScheduleChange} />
//                 <label htmlFor="allday">Available all day</label>
//             </p>
//         </div>
//         <NextPage details={scheduleDetails} />
//     </div>
// }

// export default Schedule


import React, { useEffect, useState } from "react";
import NextPage from "../nexpage/NextPage.jsx";
import "./properties/Schedule.css";

function Schedule() {
  const [scheduleDetails, setScheduleDetails] = useState({
    available_day: 1,
    start_time: "6",
    end_time: "9",
    available_allday: false
  });

  function handleScheduleChange(event) {
    const { name, value, type, checked } = event.target;

    setScheduleDetails(prev => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "available_day"
            ? Number(value)
            : value
    }));
  }

  useEffect(() => {
    console.log(scheduleDetails);
  }, [scheduleDetails]);

  // return (
  //   <div className="schedule-container">
  //     <h2 className="form-title">Availability Schedule</h2>
  //     <p className="form-subtitle">Make house visits hassle-free by sharing your availability.</p>

  //     <div className="day-buttons">
  //       <button
  //         name="available_day"
  //         value="1"
  //         onClick={handleScheduleChange}
  //         className={scheduleDetails.available_day === 1 ? "active" : ""}
  //       >
  //         Everyday (Mon–Sun)
  //       </button>
  //       <button
  //         name="available_day"
  //         value="2"
  //         onClick={handleScheduleChange}
  //         className={scheduleDetails.available_day === 2 ? "active" : ""}
  //       >
  //         Weekday (Mon–Fri)
  //       </button>
  //       <button
  //         name="available_day"
  //         value="3"
  //         onClick={handleScheduleChange}
  //         className={scheduleDetails.available_day === 3 ? "active" : ""}
  //       >
  //         Weekend (Sat–Sun)
  //       </button>
  //     </div>

  //     <div className="time-selection">
  //       <label htmlFor="start-schedule">Start Time</label>
  //       <select
  //         name="start_time"
  //         id="start-schedule"
  //         onChange={handleScheduleChange}
  //         disabled={scheduleDetails.available_allday}
  //       >
  //         <option value="6">6AM</option>
  //         <option value="9">9AM</option>
  //         <option value="12">12PM</option>
  //         <option value="15">3PM</option>
  //       </select>

  //       <label htmlFor="end-schedule">End Time</label>
  //       <select
  //         name="end_time"
  //         id="end-schedule"
  //         onChange={handleScheduleChange}
  //         disabled={scheduleDetails.available_allday}
  //       >
  //         <option value="9">9AM</option>
  //         <option value="12">12PM</option>
  //         <option value="15">3PM</option>
  //         <option value="18">6PM</option>
  //         <option value="20">8PM</option>
  //       </select>

  //       <div className="checkbox-field">
  //         <input
  //           type="checkbox"
  //           id="allday"
  //           name="available_allday"
  //           checked={scheduleDetails.available_allday}
  //           onChange={handleScheduleChange}
  //         />
  //         <label htmlFor="allday">Available all day</label>
  //       </div>
  //     </div>

  //     <NextPage details={scheduleDetails} />
  //   </div>
  // );

  return (
    <div className="schedule-container">
      <h2 className="form-title">Availability Schedule</h2>
      <p className="form-subtitle">
        Make house visits hassle-free by sharing your availability.
      </p>

      <div className="day-buttons">
        <button
          name="available_day"
          value="1"
          onClick={handleScheduleChange}
          className={`day-btn ${scheduleDetails.available_day === 1 ? "active" : ""}`}
        >
          Everyday (Mon–Sun)
        </button>
        <button
          name="available_day"
          value="2"
          onClick={handleScheduleChange}
          className={`day-btn ${scheduleDetails.available_day === 2 ? "active" : ""}`}
        >
          Weekday (Mon–Fri)
        </button>
        <button
          name="available_day"
          value="3"
          onClick={handleScheduleChange}
          className={`day-btn ${scheduleDetails.available_day === 3 ? "active" : ""}`}
        >
          Weekend (Sat–Sun)
        </button>
      </div>

      <div className="time-selection">
        <div className="time-field">
          <label htmlFor="start-schedule">Start Time</label>
          <select
            name="start_time"
            id="start-schedule"
            onChange={handleScheduleChange}
            disabled={scheduleDetails.available_allday}
          >
            <option value="6">6AM</option>
            <option value="9">9AM</option>
            <option value="12">12PM</option>
            <option value="15">3PM</option>
          </select>
        </div>

        <div className="time-field">
          <label htmlFor="end-schedule">End Time</label>
          <select
            name="end_time"
            id="end-schedule"
            onChange={handleScheduleChange}
            disabled={scheduleDetails.available_allday}
          >
            <option value="9">9AM</option>
            <option value="12">12PM</option>
            <option value="15">3PM</option>
            <option value="18">6PM</option>
            <option value="20">8PM</option>
          </select>
        </div>
      </div>

      <div className="checkbox-field">
        <input
          type="checkbox"
          id="allday"
          name="available_allday"
          checked={scheduleDetails.available_allday}
          onChange={handleScheduleChange}
        />
        <label htmlFor="allday">Available all day</label>
      </div>

      <NextPage details={scheduleDetails} />
    </div>
  );

}

export default Schedule;
