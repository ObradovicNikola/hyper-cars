import React from 'react'

export default function Menu() {
    return (
        <div>
            <div className="showcase video-container">
                <video width="100%" maxHeight="100vh" autoPlay loop muted>
                    <source src={`${process.env.PUBLIC_URL}/videos/promo.webm`} type="video/webm" />
                </video>
                {/* DISPLAY IMAGE IF WIDTH < 1000px */}
                <div className="video-shadow"></div>
            </div>
            <h1 style={{ height: '500px', color: 'black' }}>under video</h1>
        </div>
    )
}