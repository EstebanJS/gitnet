import { useState, useEffect } from 'react';
import getGifs from 'Services/getGifs';
const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const [gifs, setGifs] = useState([])

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)
        getGifs({ keyword: keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                if(keyword)localStorage.setItem('lastKeyword', keyword)
            })
    },[keyword,keywordToUse,setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE) return
        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page })
          .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
          })
      }, [keywordToUse, page, setGifs])
      return {loading, loadingNextPage, gifs, page, setPage}
}