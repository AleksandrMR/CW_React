import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ME2 from '../../assets/vrBoy.png'
import HeaderSocials from './HeaderSocials'

export default function Header() {
    return <>
        <header>
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Aleksandr Milashevski</h1>
                <h5 className='text-light'>iOS Developer / Frontend Developer / UI/UX Lover</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ ME2 }
                         alt='Aleksandr Milashevski'/>
                </div>
                <a href={'#contact'}
                   className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    </>
}
