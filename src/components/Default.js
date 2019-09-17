import React from 'react'

export default function Default() {
    return (
        <div className="home-container">
            <div className="showcase">
                <video autoPlay loop muted>
                    <source src={`${process.env.PUBLIC_URL}/videos/promo.webm`} type="video/webm" />
                </video>
                {/* DISPLAY IMAGE IF WIDTH < 1000px */}
                <div className="video-shadow"></div>
            </div>
            <h1>Error 404! Page not found.</h1>
        </div>
    )
}