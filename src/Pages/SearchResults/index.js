import React, { useRef, useEffect, useCallback } from 'react'
import { useGifs } from 'Hooks/useGifs'
import ListOfGifs from 'Components/ListOFGifs'
import useNearScreen from '../../Hooks/useNearScreen';

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const visorRef = useRef()
    const { isNearScreen } = useNearScreen({ externalRef: !loading && visorRef, once: false })

    const NextPage = useCallback(() => setPage(prevPage => prevPage + 1), [setPage])

    useEffect(function () {
        if (isNearScreen) {
            NextPage()
        }

    })
    return (
        <section className="Page">
            <div className="Header-Page">
                <h1>{keyword ? decodeURI(keyword):'Last Search'}</h1>
            </div>
            <div className="Content-Page">
                <ListOfGifs gifs={gifs} />
                <div data-testid="visor" ref={visorRef}></div>
            </div>
        </section>
    )
}

export default SearchResults
