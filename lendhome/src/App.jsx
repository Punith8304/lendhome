import React from "react";
import Home from "./components/pages/Home.jsx";
import "./App.css"
import NavBar from "./components/NavBar.jsx"
import { Routes, Route } from "react-router-dom"
import Login from "./components/pages/Login.jsx"
import Owners from "./components/pages/Owners.jsx"
import WishList from "./components/pages/WishList.jsx"
import Services from "./components/pages/Services.jsx";
import About from "./components/pages/About.jsx"
import PropertyDetails from "./components/pages/PropertyType/PropertyDetails.jsx"
import Amenities from "./components/pages/details/Amenities.jsx"
import Gallery from "./components/pages/details/Gallery.jsx"
import Locality from "./components/pages/details/Locality.jsx"
import Property from "./components/pages/details/Property.jsx"
import Rental from "./components/pages/details/Rental.jsx"
import Schedule from "./components/pages/details/Schedule.jsx"
import Layout from "./components/pages/PropertyType/Layout.jsx"
import Results from "./components/pages/Results.jsx";
function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owners />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wish-list" element={<WishList />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/results" element={<Results/>} />
          <Route path="/owner/rent" element={<Layout />}>
            <Route path="property" element={<Property />} />
            <Route path="locality" element={<Locality />} />
            <Route path="rental" element={<Rental />} />
            <Route path="amenities" element={<Amenities />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="schedule" element={<Schedule />} />
          </Route>

        </Routes>
      </div>
    </div>
  )
}
export default App;