// import React, { useEffect, useState } from "react"
// import NextPage from "../nexpage/NextPage.jsx";
// import Button from '@mui/material/Button';
// import axios from "axios"
// import "../houseUploadLayout/Properties.css";
// import { data } from "autoprefixer";
// function Gallery() {
//     const [uploadImages, setUploadImages] = useState()
//     const [showImages, setShowImages] = useState(false)
//     const [file, setFile] = useState();
//     function handleChange(event) {
//         const uploadedFile = event.target.files
//         setFile(uploadedFile);
//     }
//     async function handleClick(event) {
//         event.preventDefault()
//         const formData = new FormData()
//         Array.from(file).forEach(formFile => {
//             formData.append("files", formFile)
//         });
//         setUploadImages(formData)
//         setShowImages(true)
//     }
//     useEffect(() => {
//         console.log(uploadImages)
//     },[uploadImages])
//     return (
//         <div>
//             <p style={{ marginBottom: "1rem" }}>Upload photos</p>
//             <div>
//                 <p style={{ marginBottom: "1rem" }}>
//                     Add photos to get 5x more responses
//                 </p>
//                 <p style={{ marginBottom: "1rem" }}>
//                     90% of tenants contact on properties with photos.
//                 </p>
//                 <input
//                     id="file-input"
//                     name="files"
//                     multiple
//                     accept="image/*"
//                     type="file"
//                     onChange={handleChange}
//                 />
//                 <input
//                     id="file-submit"
//                     type="submit"
//                     onClick={handleClick}
//                 />
//             </div>
//             <NextPage details={uploadImages} />
//             {showImages && <div style={{marginTop: "20px"}}>
//                 {Array.from(file).map((file, index) => (
//                     <img
//                         key={index}
//                         src={URL.createObjectURL(file)}
//                         alt={`house${index}`}
//                         style={{ maxWidth: "300px", margin: "10px" }}
//                     />
//                 ))}
//             </div>}
//         </div>
//     );
// }
// export default Gallery


import React, { useEffect, useState } from "react";
import NextPage from "../nexpage/NextPage.jsx";
import Button from "@mui/material/Button";
import "./properties/Gallery.css";

function Gallery() {
    const [uploadImages, setUploadImages] = useState(null);
    const [showImages, setShowImages] = useState(false);
    const [file, setFile] = useState();

    function handleChange(event) {
        const uploadedFile = event.target.files;
        setFile(uploadedFile);
        setShowImages(false); // reset preview until submit
    }

    function handleClick(event) {
        event.preventDefault();
        if (!file || file.length === 0) {
            alert("Please select at least one image.");
            return;
        }

        const formData = new FormData();
        Array.from(file).forEach(formFile => {
            formData.append("files", formFile);
        });

        setUploadImages(formData);
        setShowImages(true);
    }

    useEffect(() => {
        if (uploadImages) console.log(uploadImages);
    }, [uploadImages]);

    return (
        <div className="gallery-container">
            <h2 className="gallery-heading">Upload Property Photos</h2>
            <p className="gallery-subtext">Photos help you get 5x more responses.</p>
            <p className="gallery-subtext">90% of tenants prefer listings with images.</p>

            <label htmlFor="file-input" className="file-label">
                Select Images
                <input
                    id="file-input"
                    name="files"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleChange}
                />
            </label>

            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{ marginTop: "1rem" }}
            >
                Upload Images
            </Button>

            {showImages && file && (
                <div className="image-preview-grid">
                    {Array.from(file).map((file, index) => (
                        <img
                            key={index}
                            src={URL.createObjectURL(file)}
                            alt={`house-${index}`}
                            className="image-preview"
                        />
                    ))}
                </div>
            )}

            <div style={{ marginTop: "2rem" }}>
                <NextPage details={uploadImages} />
            </div>
        </div>
    );
}

export default Gallery;
