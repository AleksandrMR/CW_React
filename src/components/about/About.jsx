import React from 'react'
import './about.css'
import AboutMe from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineFolderOpen } from 'react-icons/ai'

export default function About() {
    return <>
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ AboutMe }
                             alt='Aleksandr Milashevski'/>
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>Experience</h5>
                            <small>3+ Years Working</small>
                        </article>

                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Clients</h5>
                            <small>50+ Worldwide</small>
                        </article>

                        <article className='about__card'>
                            <AiOutlineFolderOpen className='about__icon'/>
                            <h5>Projects</h5>
                            <small>20+ Completed</small>
                        </article>
                    </div>

                    <p>
                        3+ years of experience in iOS mobile application development. Good knowledges in FrontEnd development and augmented reality. Quick learner with a great mix of technical and communicative skills with ability to adapt to a changing environment.
                        Strong critical thinker who is attentive to details while finding solutions to complex problems.
                        Superior time management and interpersonal skills developed through 15 years of customer service experience working with various stakeholders.
                    </p>

                    <a href={'#contact'}
                       className={'btn btn-primary'}
                    >Let's Talk
                    </a>
                </div>
            </div>
        </section>
    </>
}
