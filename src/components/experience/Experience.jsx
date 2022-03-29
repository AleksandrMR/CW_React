import React from 'react'
import './experience.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const iosSkills      = [
    {
        skill: 'UIKit',
        level: 'Experienced'
    },
    {
        skill: 'SwiftUI',
        level: 'Experienced'
    },
    {
        skill: 'ARKit',
        level: 'Experienced'
    },
    {
        skill: 'MapKit',
        level: 'Experienced'
    },
    {
        skill: 'RealityKit',
        level: 'Experienced'
    },
    {
        skill: 'SceneKit',
        level: 'Experienced'
    },
    {
        skill: 'SpriteKit',
        level: 'Experienced'
    },
    {
        skill: 'AVKit',
        level: 'Experienced'
    },
    {
        skill: 'CoreData',
        level: 'Experienced'
    },
    {
        skill: 'Realm',
        level: 'Experienced'
    },
    {
        skill: 'APNS',
        level: 'Experienced'
    },
    {
        skill: 'CoreGPX',
        level: 'Experienced'
    },
    {
        skill: 'CoreLocation',
        level: 'Experienced'
    },
    {
        skill: 'CoreAnimation',
        level: 'Experienced'
    },
    {
        skill: 'CoreMotion',
        level: 'Experienced'
    },
    {
        skill: 'CoreML',
        level: 'Experienced'
    }
]
const frontendSkills = [
    {
        skill: 'HTML5',
        level: 'Experienced'
    },
    {
        skill: 'CSS3',
        level: 'Experienced'
    },
    {
        skill: 'JavaScript',
        level: 'Experienced'
    },
    {
        skill: 'TypeScript',
        level: 'Experienced'
    },
    {
        skill: 'React',
        level: 'Experienced'
    },
    {
        skill: 'Markdown',
        level: 'Experienced'
    },
    {
        skill: 'REST API',
        level: 'Experienced'
    },
    {
        skill: 'Ajax',
        level: 'Experienced'
    },
    {
        skill: 'Redux',
        level: 'Experienced'
    },
    {
        skill: 'BEM',
        level: 'Experienced'
    },
    {
        skill: 'DOM',
        level: 'Experienced'
    },
    {
        skill: 'SASS',
        level: 'Experienced'
    },
    {
        skill: 'Npm',
        level: 'Experienced'
    },
    {
        skill: 'Flex',
        level: 'Experienced'
    },
    {
        skill: 'Grid',
        level: 'Experienced'
    },
    {
        skill: 'Bootstrap',
        level: 'Experienced'
    }
]

export default function Experience() {
    return <>
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__ios'>
                    <h3>iOS Development</h3>
                    <div className='experience__content'>
                        {
                            iosSkills.map( ( { skill, level }, index ) => {
                                    return <>
                                        <article key={ index } className='experience__details'>
                                            <BsFillCheckCircleFill className='experience__details-icon' />
                                            <div>
                                                <h4>{ skill }</h4>
                                                <small className='text-light'>{ level }</small>
                                            </div>
                                        </article>
                                    </>
                                }
                            )
                        }
                    </div>
                </div>

                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        {
                            frontendSkills.map( ( { skill, level }, index ) => {
                                    return <>
                                        <article key={ index } className='experience__details'>
                                            <BsFillCheckCircleFill className='experience__details-icon' />
                                            <div>
                                                <h4>{ skill }</h4>
                                                <small className='text-light'>{ level }</small>
                                            </div>
                                        </article>
                                    </>
                                }
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
}
