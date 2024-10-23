import React, {useState} from "react"

function Gallery() {
    const [file, setFile] = useState()
    function handleChange(e) {
        const url = URL.createObjectURL(e.target.files[0])
        setFile(url)
    }
    function handleClick(e) {
        e.preventDefault()
        console.log("submitted successfully")
    }
    return <div>
        <p style={{marginBottom: "1rem"}}>
            Upload photos
        </p>
        <div>
            <p style={{marginBottom: "1rem"}}>
                Add photos to get 5x more responses
            </p>
            <p style={{marginBottom: "1rem"}}>
                90% of tenants contact on properties with photos.
            </p>
            <input id="file-input" name="file-input" type="file" onChange={handleChange}/>
            <input id="file-submit" type="submit" onClick={handleClick} />
        </div>
    </div>
}

export default Gallery;