import React, { useEffect, useState } from 'react'
import axios from "axios"
import PropertyCard from "../results/PropertyCard.jsx"
function Favourites() {
  const [wishListId, setWishListId] = useState([])
  const [properties, setProperties] = useState([])
  useEffect(() => {
    (async function () {
      const result = await axios.get("http://localhost:8000/user-property/get-wishlist", { withCredentials: true })
      if (!result.data.isEmpty) {
        setWishListId(result.data.wishList)
      }
      console.log(result.data)
    })()
  }, [])

  useEffect(() => {
    (async function () {
      wishListId.forEach(async (houseId) => {
        const result = await getFullProperties(houseId.house_id)
        console.log(result, "wishlist result")
        setProperties(prev => [...prev, result])
      })
    })()
  }, [wishListId])

  async function getFullProperties(houseId) {
    const result = await axios.post("http://localhost:8000/property-details/get-display-properties", { houseId: houseId }, { withCredentials: true })
    console.log(result)
    return result.data
  }
  useEffect(() => {
    console.log(properties)
  }, [properties])
  return <div>
    {properties.length === 0 ? <h1>No Properties in Favourites</h1> : 
    properties.map((element) => {
      return <PropertyCard displayDetails={element} wishList={true} />
    })}
  </div>
}
export default Favourites