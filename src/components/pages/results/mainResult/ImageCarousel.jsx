import React, { useState } from "react"


function ImageCarousel(props) {
    console.log(props.imagesData)
    return (<div className="carousel-slider-images">
            {
                props.imagesData.map(image => <div><img className="carousel-image" src={`http://localhost:8000/property-details/images/${image.images_id}`} alt="First slide" /> <hr style={{margin: "1rem 40%"}}/></div>)
            }
    </div>
    )
}
{/*[{
    path: 'C:\\Users\\punit\\Desktop\\Projects\\LendHome\\uploads\\8e47d694d34be2ec52e47e37fcbcec05',
    size: 336971,
    encoding: '7bit',
    filename: '8e47d694d34be2ec52e47e37fcbcec05',
    mimetype: 'image/png',
    fieldname: 'files',
    destination: 'C:/Users/punit/Desktop/Projects/LendHome/uploads',
    originalname: 'Screenshot (768).png'
}]*/}

export default ImageCarousel
