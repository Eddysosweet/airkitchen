import { useState } from 'react';
import './css/slide.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ShowSlide() {
    const slides = [
        {
            image: require('./image/image1.jpg')
        },
        {
            image: require('./image/image2.png')
        },
        {
            image: require('./image/image3.png')
        },
        {
            image: require('./image/image4.png')
        }
    ];
    console.log('helo');
    const [current, setCurrent] = useState(0);
    const length = slides.length - 1;
    const nextslide = () => {
        if (current !== length) {
            setCurrent(current + 1)
        } else if (current === length) {
            setCurrent(0)
        }
    }
    const prevslide = () => {
        if (current !== 0) {
            setCurrent(current - 1)
        } else if (current === 0) {
            setCurrent(length)
        }

    }
    const moveSlide = (index) => {
        setCurrent(index)
    }



    return (
        <div className='slidesshow'>
            <ArrowBackIcon className='backicon' onClick={prevslide} />
            {
                slides.map((course, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} key={course.image}>
                            <img className='imageslide' src={course.image} alt="slideimage" />
                        </div>
                    )
                })
            }
            <ArrowForwardIcon className='forwardicon' onClick={nextslide} />
            <div className='slide-dot'>
                {
                    Array.from({ length: 4 }).map((item, index) => (
                        <div onClick={() => moveSlide(index)}
                            className={current === index ? 'dot act' : 'dot'}></div>
                    )

                    )
                }
            </div>
        </div>
    )
}