import React, { useRef } from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { FaTelegramPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

export default function Contact({ showModal }) {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_rn55cnq', 'template_1vtl3im', form.current, '8w2x-dbGZFhl7mqdz')
            .then((result) => {
                console.log(result.text);
                showModal()
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            })
    }
    return <>
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <FaTelegramPlane className='contact__option-icon' />
                        <h4>Telegram</h4>
                        <h5>@AleksandrMilashevski</h5>
                        <a href='https://t.me/AleksandrMilashevski'
                           target='_blank'
                        >Send a message
                        </a>
                    </article>

                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>aleksandrmilashevski@gmail.com</h5>
                        <a href='mailto:aleksandrmilashevski@gmail.com'
                           target='_blank'
                        >Send a message
                        </a>
                    </article>

                    <button className='btn btn-primary'
                            onClick={ () => { showModal() } }
                    >Show Modal
                    </button>
                </div>

                <form ref={ form } onSubmit={ sendEmail }>
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    </>
}
