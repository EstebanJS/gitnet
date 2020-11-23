import React, { useCallback } from 'react'
import SearchBox from 'Components/SearchBox/index';
import TreandingSearches from 'Components/TrendingSearches';
import ChangeTheme from 'Components/ChangeTheme/index';
import './styles.css'
import { useLocation } from 'wouter';

const LeftBar = () => {
    const Loc = useLocation()
    const pushLocation = Loc[1]

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <section className="leftBar">
            <SearchBox onSubmit={handleSubmit}/>
            <TreandingSearches />
            <ChangeTheme />
        </section>
    )
}

export default LeftBar
