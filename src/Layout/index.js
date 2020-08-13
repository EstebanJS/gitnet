import React from 'react'
import './styles.css'
import SearchBox from 'Components/SearchBox/index';
import TreandingSearches from 'Components/TrendingSearches';


const LayOut = () => {
    return (
        <section className="container">
            <section className="leftBar">
                <SearchBox />
                <TreandingSearches/>
            </section>
            <section className="pageContent">

            </section>
        </section>
    )
}

export default LayOut
