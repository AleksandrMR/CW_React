import React from 'react'
import './nav.css'
import { useState } from 'react'
import { BiBook } from 'react-icons/bi'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { RiServiceLine, RiMessage2Line } from 'react-icons/ri'

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    return <>
        <nav>
            <a href={'#'}
               onClick={ () => setActiveNav('#') }
               className={ activeNav === '#' ? 'active' : '' }>
                <AiOutlineHome />
            </a>

            <a href={'#about'}
               onClick={ () => setActiveNav('#about') }
               className={ activeNav === '#about' ? 'active' : '' }>
                <AiOutlineUser />
            </a>

            <a href={'#experience'}
               onClick={ () => setActiveNav('#experience') }
               className={ activeNav === '#experience' ? 'active' : '' }>
                <BiBook />
            </a>

            <a href={'#services'}
               onClick={ () => setActiveNav('#services') }
               className={ activeNav === '#services' ? 'active' : '' }>
                <RiServiceLine />
            </a>

            <a href={'#contact'}
               onClick={ () => setActiveNav('#contact') }
               className={ activeNav === '#contact' ? 'active' : '' }>
                <RiMessage2Line />
            </a>
        </nav>
    </>
}
