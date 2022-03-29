import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Modal from './components/modal/Modal'

export default function App() {
        const [openModal, setModal] = useState(false)
        const toggleModal = () => { setModal(!openModal) }

        return <>
                <Header />
                <Nav />
                <About />
                <Experience />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contact showModal={ toggleModal } />
                <Footer />
                { openModal && <Modal closeModal={ toggleModal } /> }
        </>
}


