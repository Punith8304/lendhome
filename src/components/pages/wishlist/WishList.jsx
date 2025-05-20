import React, { useEffect, useState, useContext } from 'react'
import axios from "axios"
import PropertyCard from "../results/PropertyCard.jsx"
import { loginStatusContext } from '../../../App.jsx'
import emptyWishlistImg from "../../../images/undraw_empty-cart_574u.png"
import { useNavigate } from 'react-router-dom'
import "./Wishlist.css"


function Favourites() {
  const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
  const [wishListId, setWishListId] = useState([])
  const [properties, setProperties] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    (async function () {
      const result = await axios.get(`${userAuthentication.apiEndPoint}/user-property/get-wishlist`, { withCredentials: true })
      if (!result.data.isEmpty) {
        setWishListId(result.data.wishList)
      }
      console.log(result.data)
    })()
  }, [])

  useEffect(() => {
    (async function () {
      wishListId.map(async (houseId) => {
        const result = await getFullProperties(houseId.house_id)
        console.log(result, "wishlist result")
        setProperties(prev => [...prev, result])
      })
    })()
  }, [wishListId])


  async function getFullProperties(houseId) {
    const result = await axios.post(`${userAuthentication.apiEndPoint}/property-details/get-display-properties`, { houseId: houseId }, { withCredentials: true })
    console.log(result)
    return result.data
  }
  useEffect(() => {
    console.log(properties)
  }, [properties])
  return <div>
    {properties.length === 0 ? (
      <div className="wishlist-empty">
        <img src={emptyWishlistImg} alt="Empty Wishlist" />
        <h2>Your Wishlist is Empty</h2>
        <p>Looks like you haven’t added any properties yet.</p>
        <button onClick={() => navigate("/")}>Explore Properties</button>
      </div>
    ) : (
      properties.map((element) => {
        return <PropertyCard displayDetails={element} />
      })
    )}
  </div >
}
export default Favourites