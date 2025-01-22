import React from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import axios from "axios";
import { useLocation } from "react-router-dom";
function NextPage(props) {
    const pages = ["property", "locality", "rental", "amenities", "gallery", "schedule"]
    const location = useLocation();
    const navigate = useNavigate();
    const currentPage = location.pathname.split("/").pop();
    async function handleSubmit() {
        try {
            console.log(props.details)
            const result = await axios.post(`http://localhost:8000/upload/${currentPage}-details`, props.details, { withCredentials: true })
            const nextIndex = pages.indexOf(currentPage) + 1;
            alert("hello world");
            console.log(props.details)
            navigate(`/owner/rent/${pages[nextIndex]}`)
            console.log(result)
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