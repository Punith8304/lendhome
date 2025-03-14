import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { loginStatusContext } from "../../../../App.jsx";
function NextPage(props) {
    const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
    const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
    const location = useLocation();
    const navigate = useNavigate();
    const currentPage = location.pathname.split("/").pop();
    async function handleSubmit() {
        try {
            const result = await axios.post(`http://localhost:8000/upload/${currentPage}-details`, props.details, { withCredentials: true })
            const nextIndex = pages.indexOf(currentPage) + 1;
            alert("hello world");
            console.log(props.details)

            const completedPropertyList = await axios.get("http://localhost:8000/property-details/completed-properties-list", { withCredentials: true })
            setUserAuthentication(prev => {
                return {
                    ...prev,
                    user: completedPropertyList.data.updateUser
                }
            })
            if (completedPropertyList.data.updateUser.house.houseCreationInitialised) {
                console.log(completedPropertyList.data.updateUser.house)
                if (currentPage === "schedule") {
                    navigate(`/owner/rent/${completedPropertyList.data.updateUser.house.currentProperty}`)
                } else {
                    navigate(`/owner/rent/${pages[nextIndex]}`)
                }
            } else {
                navigate("/my-properties")
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    return <div className="details-submit-button" onClick={handleSubmit}>
        <Button variant="contained">{currentPage === "schedule" ? "Save" : "Save & next"}</Button>
    </div>
}
export default NextPage;