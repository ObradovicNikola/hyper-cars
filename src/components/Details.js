import React from 'react'
import './style/Details.css'

const sampleCar = {
    id: 1,
    title: "Ferrari - LaFerrari",
    img: "laferrari.jpg",
    production: 2013,
    manufacturer: "Ferrari N.V.",
    shortInfo: "Ferrari’s latest top-of-the-tree hypercar is nothing less than the greatest and most sensational peak that the performance car has ever reached.Powered by an incredible, spine - tingling, naturally aspirated, 789bhp 6.3 - litre V12 assisted by 161bhp of electric power channelled direct to the rear wheels, the LaFerrari’s powertrain makes an incredible 950bhp all told.Although we never got the chance to strap our timing gear to one, Ferrari claims the car hurls itself to 62mph in just 2.4sec and to 186mph in just 15sec.And yet, in spite of its enormous performance and mind - boggling mechanical complication, the LaFerrari has absurdly benign and exploitable limit handling manners that make it so much more approachable and exciting to drive on a circuit than you’d ever believe it could be.",
    enginePower: "708 kW (949 hp)",
    kerbWeight: "1,585 kg",
}

export default function Details(props) {
    let car
    if (props.location.details)
        car = props.location.details
    else car = sampleCar
    // document.getElementById('root').scrollTo(0, 0)
    document.getElementById('root').scrollTo({
        top: 0,
        behavior: 'smooth',
    })
    return (
        <div className="details-container">
            <div className="showcase">
                <img src={`${process.env.PUBLIC_URL}/images/${car.img}`} alt={car.title} />
                <div className="video-shadow"></div>
            </div>
            <div className="car-info">
                <h1>{car.title}</h1>
                <div className="car-stats">
                    <h2>Total engine power: {car.enginePower}</h2>
                    <h2>Kerb Weight: {car.kerbWeight}</h2>
                    <h2>Production: {car.production}</h2>
                </div>

                <p>{car.shortInfo}</p>
                <p>{car.wiki}</p>
            </div>
        </div>
    )
}
