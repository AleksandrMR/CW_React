import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'


export default function HeaderSocials() {
    return <>
        <div className='header__socials'>
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
    </>
}
