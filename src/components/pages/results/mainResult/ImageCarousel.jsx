import React, { useState } from "react"
import Carousel from 'react-bootstrap/Carousel';




import { CarouselItem } from "react-bootstrap";

function ImageCarousel(props) {
    const [imageIndex, setImageIndex] = useState(0)
    return (<div className="carousel-slider-images">
            {
                props.imagesData.map(image => <div><img className="carousel-image" src={`${image.path}.jpg`} alt="First slide" /> <hr style={{margin: "1rem 40%"}}/></div>)
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
