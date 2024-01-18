import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types'
import './Carousel.css'

/**
UI component to create a carousel
 */
export const Carousel = ({ data }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
        return () => clearInterval(interval)
    })

    return (
        <div className='carousel-container '>
            {data.map((item, index) => {
                return <img className='carousel-item'
                    style={{ transform: `translate(-${currentIndex * 100}%)` }}
                    src={item.img}
                    key={index}></img>
            })
            }
        </div>
    )
}

// Carousel.propTypes = {
//     /** Data for the carousel component */
//     data: PropTypes.array
// }