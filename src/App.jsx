import React, { createContext, useState, useEffect } from "react";
import axios from "axios"
import Home from "./components/pages/home/Home.jsx";
import "./App.css"
import NavBar from "./components/pages/home/navbar/NavBar.jsx"
import { Routes, Route, Router } from "react-router-dom"
import Login from "./components/pages/authentication/Login.jsx"
import Signup from "./components/pages/authentication/Signup.jsx"
import WishList from "./components/pages/wishlist/WishList.jsx"
import Property from "./components/pages/owners/houseUploadDetails/Property.jsx"
import Locality from "./components/pages/owners/houseUploadDetails/Locality.jsx";
import Rental from "./components/pages/owners/houseUploadDetails/Rental.jsx";
import Amenities from "./components/pages/owners/houseUploadDetails/Amenities.jsx";
import Gallery from "./components/pages/owners/houseUploadDetails/Gallery.jsx";
import Schedule from "./components/pages/owners/houseUploadDetails/Schedule.jsx";
import Layout from "./components/pages/owners/houseUploadLayout/Layout.jsx"
import Results from "./components/pages/results/Results.jsx";
import Owners from "./components/pages/owners/Owners.jsx";
import MyProperties from "./components/pages/results/myProperties/MyProperties.jsx";
import FullResult from "./components/pages/results/mainResult/FullResult.jsx";
export const loginStatusContext = createContext()
function App() {
  const apiEndPoint = {apiEndPoint: "https://lendhome.in/api"}
  const [userAuthentication, setUserAuthentication] = useState({ login: false, ...apiEndPoint })
  useEffect(() => {
    (async () => {
      const authenticationStatus = await axios.get(`${apiEndPoint.apiEndPoint}/authentication/check-authentication`, { withCredentials: true })
      if (authenticationStatus.data.login) {
        console.log(authenticationStatus.data)
        setUserAuthentication({...authenticationStatus.data, ...apiEndPoint})
        /* gives response in the fromat => {
          login: true,
          user: {
            username: user_name,
            useremail: user_email,
            usermobile: user_mobile,
            house: {
              houseId: 392,
              houseCreationInitialised: true,
              currentProperty: "locality",
              completedList: []
            }
          }
        }*/
      }
    })();
  }, [])
  return (
    <loginStatusContext.Provider value={{ userAuthentication, setUserAuthentication }} >
      <div>
        <NavBar />
        <div>


            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/owner" element={<Owners />} />
              <Route path="/login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="/wish-list" element={userAuthentication.login ? <WishList /> : <Login />} />
              <Route path="/results" element={<Results />} />
              <Route path="/my-properties" element={userAuthentication.login ? <MyProperties /> : <Login />} />
              <Route path="/house" element={userAuthentication.login ? <FullResult /> : <Login />} />
              <Route path="/owner/rent" element={userAuthentication.login ? <Layout /> : <Login />}>
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
    </loginStatusContext.Provider>
  )
}
export default App;