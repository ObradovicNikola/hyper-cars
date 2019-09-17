import React from 'react'
import './style/Contact.css'
import Form from './Form'

export default function Contact() {


    return (
        <div className="contact-container">
            <div className="showcase">
                <img src={`${process.env.PUBLIC_URL}/images/contact-showcase.jpg`} alt="contact showcase" />
                <div className="video-shadow"></div>
            </div>
            <h2>If you want your car to be reviewed here or you have anything to share feel free to contact us:</h2>
            <Form />
        </div>
    )
}