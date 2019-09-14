import React, { Component } from 'react'
import './style/Home.css'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="showcase video-container">
                    <video width="100%" maxHeight="100vh" autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/videos/promo.webm`} type="video/webm" />
                    </video>
                    {/* DISPLAY IMAGE IF WIDTH < 1000px */}
                    <div className="video-shadow"></div>
                </div>
                <h1 style={{ height: '500px', color: 'white' }}>under video</h1>
            </div >
        )
    }
}