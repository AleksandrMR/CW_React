import React from 'react'
import './modal.css'
import { FiCheckCircle } from 'react-icons/fi'

export default function Modal({ closeModal }) {

    function modalIsActive(value) {
        if (value) {
            document.body.classList.add('modal-isActive')
        } else {
            document.body.classList.remove('modal-isActive')
            closeModal()
        }
    }

    modalIsActive(true)

    return <>
        <div className='popup'>
            <div className='overlay' onClick={ () => { modalIsActive(false) } } />
            <div className='popup__content'>
                <div className="messageBox">
                    <FiCheckCircle className='popup__check-icon' />
                    <h2 className="titleForm">Successfully</h2>
                    <p>Thank you for contacting</p>
                    <small>We will contact you shortly</small>
                </div>
                <div className='buttonBox'>
                    <button
                        className='btn btn-primary'
                        onClick={ () => { modalIsActive(false) } }
                    >Close
                    </button>
                </div>
            </div>
        </div>
    </>
}
