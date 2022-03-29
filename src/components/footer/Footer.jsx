import React from 'react'
import './footer.css'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

export default function Footer() {
    return <>
        <footer>
            <a href= {'#' } className='footer__logo'>AM DevApp</a>
            <ul className='permalinks'>
                <li><a href={ '#' }>Home</a></li>
                <li><a href={ '#about' }>About</a></li>
                <li><a href={ '#experience' }>Experience</a></li>
                <li><a href={ '#services' }>Services</a></li>
                <li><a href={ '#portfolio' }>Portfolio</a></li>
                <li><a href={ '#testimonials' }>Testimonials</a></li>
                <li><a href={ '#contact' }>Contact</a></li>
            </ul>
            <div className='footer__socials'>
                <a href='https://www.linkedin.com/in/aleksandr-milashevski/'
                   target='_blank'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/AleksandrMR/'
                   target='_blank'>
                    <BsGithub />
                </a>
                <a href='https://www.instagram.com/aleksandr.milashevski/'
                   target='_blank'>
                    <BsInstagram />
                </a>
            </div>
            <div className='footer__copyright'>
                <small>&copy; 2022 Aleksandr Milashevski. All rights is reserved.</small>
            </div>
        </footer>
    </>
}

