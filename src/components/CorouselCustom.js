import React, { useEffect, useState } from 'react';
import image1 from "../assets/image-1.jpg";
import image2 from "../assets/image-2.jpg";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";
import image5 from "../assets/image-5.jpg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "../styles/carousel/Carousel.css";

const CarouselCustom = () => {
    const imageArray = [image1, image2, image3, image4, image5];
    const [centreIndex, setCentreIndex] = useState(Math.floor(imageArray.length / 2));
    const [transition, setTransition] = useState('');

    const getImageIndex = (index) => {
        const arrayLength = imageArray.length;
        // Ensure the index loops within the array bounds
        return (index + arrayLength) % arrayLength;
    };

    useEffect(() => {
        console.log(centreIndex);
    }, [centreIndex]);

    const handlePrev = () => {
        setTransition('prev');
        setCentreIndex(prev => getImageIndex(prev - 1));
    };

    const handleNext = () => {
        setTransition('next');
        setCentreIndex(prev => getImageIndex(prev + 1));
    };

    const handleTransitionEnd = () => {
        setTransition('');
    };

    return (
        <div className='carousel-main-div'>
            <div className='heading-text-div'>
                <p className='main-heading'>
                    Featured Products
                </p>
                <p className='sub-text'>
                    Explore and discover a variety of products
                </p>
            </div>

            <div className='images-container'>
                <img
                    src={imageArray[getImageIndex(centreIndex - 2)]}
                    className={`small-image ${transition === 'prev' ? 'transition-left' : transition === 'next' ? 'transition-right scale-2' : ''}`}
                    alt='small'
                    onTransitionEnd={handleTransitionEnd}
                />
                <img
                    src={imageArray[getImageIndex(centreIndex - 1)]}
                    className={`mid-image ${transition === 'prev' ? 'transition-left' : transition === 'next' ? 'transition-right scale-1' : ''}`}
                    alt='small'
                    onTransitionEnd={handleTransitionEnd}
                />
                <img
                    src={imageArray[centreIndex]}
                    className={`large-image ${transition === 'prev' ? 'transition-left' : transition === 'next' ? 'transition-right scale' : ''}`}
                    alt='small'
                    onTransitionEnd={handleTransitionEnd}
                />
                <img
                    src={imageArray[getImageIndex(centreIndex + 1)]}
                    className={`mid-image ${transition === 'prev' ? 'transition-left' : transition === 'next' ? 'transition-right scale-1' : ''}`}
                    alt='small'
                    onTransitionEnd={handleTransitionEnd}
                />
                <img
                    src={imageArray[getImageIndex(centreIndex + 2)]}
                    className={`small-image ${transition === 'prev' ? 'transition-left' : transition === 'next' ? 'transition-right scale-2' : ''}`}
                    alt='small'
                    onTransitionEnd={handleTransitionEnd}
                />
            </div>

            <div className='carousel-nav-div'>
                <button onClick={handlePrev}>
                    <FaArrowLeft />
                </button>
                {imageArray.map((_, id) => (
                    <div 
                        onClick={() => setCentreIndex(id)} 
                        className={id === centreIndex? 'page-dot filled-dot' : "page-dot"}
                    ></div>
                ))}
                <button onClick={handleNext}>
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
};

export default CarouselCustom;
