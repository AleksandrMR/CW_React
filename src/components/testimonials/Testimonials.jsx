import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
    {
        avatar: AVATAR1,
        name: 'Ernest Achiever',
        review: 'The App is for a national park, located in the center of Italy. Allows you to quickly get acquainted with the sights and places where you can eat and sleep, choose a route.\n' +
            '                                            You can also record and publish your own route.'
    },
    {
        avatar: AVATAR2,
        name: 'Ernest Achiever',
        review: 'The App is for a national park, located in the center of Italy. Allows you to quickly get acquainted with the sights and places where you can eat and sleep, choose a route.\n' +
            '                                            You can also record and publish your own route.'
    },
    {
        avatar: AVATAR3,
        name: 'Ernest Achiever',
        review: 'The App is for a national park, located in the center of Italy. Allows you to quickly get acquainted with the sights and places where you can eat and sleep, choose a route.\n' +
            '                                            You can also record and publish your own route.'
    },
    {
        avatar: AVATAR4,
        name: 'Ernest Achiever',
        review: 'The App is for a national park, located in the center of Italy. Allows you to quickly get acquainted with the sights and places where you can eat and sleep, choose a route.\n' +
            '                                            You can also record and publish your own route.'
    }
]

export default function Testimonials() {
    return <>
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                    modules={ [Pagination] }
                    spaceBetween={ 40 }
                    slidesPerView={ 1 }
                    pagination={ { clickable: true } }
            >
                {
                    testimonialsData.map( ( { avatar, name, review }, index ) => {
                            return <>
                                <SwiperSlide key={ index } className='testimonial'>
                                    <div className='client__avatar'>
                                        <img src={ avatar } alt='Avatar'/>
                                    </div>
                                    <h5 className='client__name'>{ name }</h5>
                                    <small className='client__review'>{ review }</small>
                                </SwiperSlide>
                            </>
                        }
                    )
                }
            </Swiper>
        </section>
    </>
}
