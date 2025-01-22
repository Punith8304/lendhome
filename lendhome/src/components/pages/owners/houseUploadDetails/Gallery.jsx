import React, { useEffect, useState } from "react"
import NextPage from "../nexpage/NextPage.jsx";
import Button from '@mui/material/Button';
import axios from "axios"
import "../houseUploadLayout/Properties.css";
function Gallery() {
    const [uploadImages, setUploadImages] = useState()
    const [showImages, setShowImages] = useState(false)
    const [file, setFile] = useState();
    function handleChange(event) {
        const uploadedFile = event.target.files
        setFile(uploadedFile);
    }
    async function handleClick(event) {
        event.preventDefault()
        const formData = new FormData()
        Array.from(file).forEach(formFile => {
            formData.append("files", formFile)
        });
        setUploadImages(formData)
        setShowImages(true)
    }
    useEffect(() => {
        console.log(uploadImages)
    },[uploadImages])

    
    return (
        <div>
            <p style={{ marginBottom: "1rem" }}>Upload photos</p>
            <div>
                <p style={{ marginBottom: "1rem" }}>
                    Add photos to get 5x more responses
                </p>
                <p style={{ marginBottom: "1rem" }}>
                    90% of tenants contact on properties with photos.
                </p>
                <input
                    id="file-input"
                    name="files"
                    multiple
                    accept="image/*"
                    type="file"
                    onChange={handleChange}
                />
                <input
                    id="file-submit"
                    type="submit"
                    onClick={handleClick}
                />
            </div>
            <NextPage details={uploadImages} />
            {showImages && <div style={{marginTop: "20px"}}>
                {Array.from(file).map((file, index) => (
                    <img
                        key={index}
                        src={URL.createObjectURL(file)}
                        alt={`house${index}`}
                        style={{ maxWidth: "300px", margin: "10px" }}
                    />
                ))}
            </div>}

        </div>
    );
}

export default Gallery