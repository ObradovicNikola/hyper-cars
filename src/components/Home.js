import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style/Home.css'
import { hyperCars } from '../data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                            {/* Indicator for mobile */}
                            <div className="cursor-indicator">
                                <i className="far fa-hand-pointer"></i>
                            </div>
                        </div>
                    </Link>
                    <div className="wrapper">
                        <h2>{car.title}</h2>
                        <p>{car.shortInfo}</p>
                    </div>
                </div>
            )
        })

        const slides = this.state.hyperCars.map((car) => {
            return (
                <div key={car.id + 10}>
                    <Link to={{
                        pathname: '/details',
                        details: { ...car },
                    }} className="slide" >
                        <p>{car.title}</p>
                        <div className="img-box">
                            <img src={`${process.env.PUBLIC_URL}/images/${car.img}`} alt={car.title} />
                            <div className="img-shadow"></div>
                        </div>
                    </Link>
                </div >

            )
        })

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            swipe: true,
            draggable: false
        };

        return (
            <div className="home-container">
                <div className="showcase">
                    <video autoPlay loop muted>
                        <source src={`${process.env.PUBLIC_URL}/videos/promo.webm`} type="video/webm" />
                    </video>
                    {/* DISPLAY IMAGE IF WIDTH < 1000px */}
                    <div className="video-shadow"></div>
                </div>
                <Slider {...settings} style={{ width: '60%', margin: '30px auto' }}>
                    {slides}
                </Slider>
                <h1>Top 10 best hypercars 2019</h1>
                {hyperCars}
            </div >
        )
    }
}