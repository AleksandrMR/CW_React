import React from 'react'
import './services.css'
import { BsCheck } from 'react-icons/bs'

const iosServices    = [
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    }
]
const webServices    = [
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    }
]
const designServices = [
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    },
    {
        title: 'Allows you to quickly get'
    }
]

export default function Services () {
    return <>
        <section id='services'>
            <h5>What I Offer</h5>
            <h2> Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>iOS Development</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            iosServices.map( ( { title }, index ) => {
                                    return <>
                                        <li key={ index }>
                                            <BsCheck className='service__list-icon' />
                                            <p>{ title }</p>
                                        </li>
                                    </>
                                }
                            )
                        }
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            webServices.map( ( { title }, index ) => {
                                    return <>
                                        <li key={ index }>
                                            <BsCheck className='service__list-icon' />
                                            <p>{ title }</p>
                                        </li>
                                    </>
                                }
                            )
                        }
                    </ul>
                </article>

                <article className='service'>
                    <div className='service__head'>
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className='service__list'>
                        {
                            designServices.map( ( { title }, index ) => {
                                    return <>
                                        <li key={ index }>
                                            <BsCheck className='service__list-icon' />
                                            <p>{ title }</p>
                                        </li>
                                    </>
                                }
                            )
                        }
                    </ul>
                </article>
            </div>
        </section>
    </>
}
