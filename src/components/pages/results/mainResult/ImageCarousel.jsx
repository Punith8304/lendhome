// import React, { useState, useContext } from "react"
// import { loginStatusContext } from "../../../../App"


// function ImageCarousel(props) {
//     console.log(props.imagesData)
//     const { userAuthentication, setUserAuthentication } = useContext(loginStatusContext)
//     return (<div className="carousel-slider-images">
//         {
//             props.imagesData.map(image => <div><a href={`${userAuthentication.apiEndPoint}/property-details/images/${image.images_id}`} target="_blank"><img className="carousel-image" src={`${userAuthentication.apiEndPoint}/property-details/images/${image.images_id}`} alt="First slide" /> </a><hr style={{ margin: "1rem 40%" }} /></div>)
//         }
//     </div>
//     )
// }
// {/*[{
//     path: 'C:\\Users\\punit\\Desktop\\Projects\\LendHome\\uploads\\8e47d694d34be2ec52e47e37fcbcec05',
//     size: 336971,
//     encoding: '7bit',
//     filename: '8e47d694d34be2ec52e47e37fcbcec05',
//     mimetype: 'image/png',
//     fieldname: 'files',
//     destination: 'C:/Users/punit/Desktop/Projects/LendHome/uploads',
//     originalname: 'Screenshot (768).png'
// }]*/}

// export default ImageCarousel



import React, { useContext } from "react";
import { loginStatusContext } from "../../../../App";

function ImageCarousel({ imagesData }) {
    const { userAuthentication } = useContext(loginStatusContext);
    return (
        <div className="carousel">
            {imagesData.map((image) => (
                <div className="carousel-image-wrapper" key={image.images_id}>
                    <a href={`${userAuthentication.apiEndPoint}/property-details/images/${image.images_id}`} target="_blank" rel="noreferrer">
                        <img className="carousel-image" src={`${userAuthentication.apiEndPoint}/property-details/images/${image.images_id}`} alt="Property" />
                    </a>
                </div>
            ))}
        </div>
    );
}

export default ImageCarousel;
