import React from 'react'
import './Splashscreen.css'
import BMW from './splashFolder/BMW'
import AUDI from './splashFolder/AUDI'
import LAMBORGHINI from './splashFolder/LAMBORGHINI'

export default function Splashscreen() {
    return (
        <div className="splash-screen">
            <div className="container-1">
                <BMW />
            </div>
            <div className="container-2">
                <LAMBORGHINI />
            </div>
            <div className="container-3">
                <AUDI />
            </div>
        </div>
    )
}
