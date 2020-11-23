import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distanse = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
       let observer

       const fromElement = externalRef ? externalRef.current : fromRef.current

       if(!fromElement) return
       const onChange = (entries,observer) =>{
           const el = entries[0]
           if(el.isIntersecting){
               setIsNearScreen(true)
               once && observer.disconnect()
           } else {
               !once && setIsNearScreen(false)
           }
       }

       observer = new IntersectionObserver(onChange,{
           rootMargin:distanse
       })

       observer.observe(fromElement)

       return () => observer && observer.disconnect()
    }, [distanse,externalRef,once])

    return {isNearScreen,fromRef}
}