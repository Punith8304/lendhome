import React from "react";
import Home from "./components/pages/home/Home.jsx";
import "./App.css"
import NavBar from "./components/pages/home/navbar/NavBar.jsx"
import { Routes, Route } from "react-router-dom"
import Login from "./components/pages/login/Login.jsx"
import WishList from "./components/pages/wishlist/WishList.jsx"
import Services from "./components/pages/services/Services.jsx";
import About from "./components/pages/about/About.jsx"
import Property from "./components/pages/owners/houseUploadDetails/Property.jsx"
import Locality from "./components/pages/owners/houseUploadDetails/Locality.jsx";
import Rental from "./components/pages/owners/houseUploadDetails/Rental.jsx";
import Amenities from "./components/pages/owners/houseUploadDetails/Amenities.jsx";
import Gallery from "./components/pages/owners/houseUploadDetails/Gallery.jsx";
import Schedule from "./components/pages/owners/houseUploadDetails/Schedule.jsx";
import Layout from "./components/pages/owners/houseUploadLayout/Layout.jsx"
import Results from "./components/pages/results/Results.jsx";
import Owners from "./components/pages/owners/Owners.jsx";
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