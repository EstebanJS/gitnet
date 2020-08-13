import React, { useState, useEffect } from 'react'
import getTrendingTerms from 'Services/getTrendingSearches'
import Category from '../Category/index';


const TreandingSearches = () => {
    const [trends,setTrends] = useState([])
    useEffect(function () {
        getTrendingTerms().then(setTrends)
    },[])
    return <Category name ="Lo más buscado" options={trends}/>
}

export default TreandingSearches
