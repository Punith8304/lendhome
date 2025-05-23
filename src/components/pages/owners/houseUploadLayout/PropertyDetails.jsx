// import React, { useContext, useState } from "react";
// import "./Properties.css";
// import { NavLink } from "react-router-dom"
// import { loginStatusContext } from "../../../../App.jsx";
// const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
// function PropertyDetails() {
//     const {userAuthentication} = useContext(loginStatusContext)
//     return <div className="property-page">
//         <div>
//             property details
//             <div className="details-property"  >
//                 {pages.map((pg) => {
//                     const condition = userAuthentication.user.house.completedList.includes(pg)
//                     return <NavLink style={ condition ? {backgroundColor: "green"} : null} to={`/owner/rent/${pg}`} className="property-button" >
//                         {pg.charAt(0).toUpperCase() + pg.slice(1)}
//                     </NavLink>
//                 })}
//             </div>
//         </div>
//     </div>
// }

// export default PropertyDetails


import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { loginStatusContext } from "../../../../App.jsx";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

const pages = [
  { key: "property", label: "Property" },
  { key: "locality", label: "Locality" },
  { key: "rental", label: "Rental" },
  { key: "amenities", label: "Amenities" },
  { key: "gallery", label: "Gallery" },
  { key: "schedule", label: "Schedule" },
];

function PropertyDetails() {
  const { userAuthentication } = useContext(loginStatusContext);

  return (
    <aside className="property-sidebar">
      <h2 className="sidebar-title">Property Setup</h2>

      <nav className="property-stepper">
        {pages.map(({ key, label }, idx) => {
          const completed = userAuthentication.user.house.completedList.includes(key);
          return (
            <React.Fragment key={key}>
              <NavLink
                to={`/owner/rent/${key}`}
                className={({ isActive }) =>
                  `stepper-item ${completed ? "completed" : ""} ${isActive ? "active" : ""}`
                }
              >
                <div className="stepper-icon">
                  {completed ? (
                    <CheckCircleIcon fontSize="small" />
                  ) : (
                    <span className="step-number">{idx + 1}</span>
                  )}
                </div>
                <span className="step-label">{label}</span>
              </NavLink>
              {idx < pages.length - 1 && <div className="stepper-connector" />}
            </React.Fragment>
          );
        })}
      </nav>

      <div className="sidebar-info">
        <InfoIcon fontSize="small" color="primary" />
        <p>Complete all steps to publish your property listing.</p>
      </div>
    </aside>
  );
}

export default PropertyDetails;

