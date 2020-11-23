import React from 'react'
import './styles.css'
import { useLocation } from 'wouter';
const Logo = () => {
    const Loc = useLocation()
    const pushLocation = Loc[1]

    return (
        <div className="Logo" onClick={() => pushLocation(`/`)}>
            <h1>Gif<span>NET</span></h1>
        </div>
    )
}

export default Logo
