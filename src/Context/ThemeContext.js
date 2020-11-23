import React,{ useState } from 'react'

const Context = React.createContext({})

export const ThemeContext = ({children}) => {
    const [isDark,setIsDark ] = useState(false)
    return (
        <Context.Provider value={{isDark,setIsDark}}>
            {children}
        </Context.Provider>
    )
}

export default Context
