import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/Home.css'
import { hyperCars } from '../data'

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            hyperCars
        }
    }
    render() {
        const hyperCars = this.state.hyperCars.map((car) => {
            return (
                <div className="car-container" key={car.id}>
                    <Link to={{
                        pathname: '/details',
                        details: { ...car }
                    }} >
                        <div className="img-box">
                            <img src={`${process.env.PUBLIC_URL}/images/${car.img}`} alt={car.title} />
                            <div className="img-shadow"></div>
                        </div>
                    </Link>
                    <div className="wrapper">
                        <h2>{car.title}</h2>
                        <p>{car.shortInfo}</p>
                    </div>
                </div>
            )
        })

        return (
            <div className="home-container">
                <div className="showcase">
                    <video autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/videos/promo.webm`} type="video/webm" />
                    </video>
                    {/* DISPLAY IMAGE IF WIDTH < 1000px */}
                    <div className="video-shadow"></div>
                </div>
                <p>CAROUSEL</p>
                <h1>Top 10 best hypercars 2019</h1>
                {hyperCars}
            </div >
        )
    }
}