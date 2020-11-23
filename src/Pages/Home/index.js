import React from 'react'
import './styles.css'
import { useGifs } from 'Hooks/useGifs'
import ListOfGifs from '../../Components/ListOFGifs/index';
const Home = () => {
    const { gifs } = useGifs()
    return (
        <div className="Page">
            <div className="Header-Page">
                <h1>Last Search</h1>
            </div>
            <div className="Content-Page">
                <ListOfGifs gifs={gifs} />
            </div>
        </div>
    )
}

export default Home
