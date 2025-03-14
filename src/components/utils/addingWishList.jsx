import axios from "axios"

export const addToWishList = async (houseId) => {
    const result = await axios.post("http://localhost:8000/user-property/add-to-wishlist", { houseId: houseId }, { withCredentials: true })
}