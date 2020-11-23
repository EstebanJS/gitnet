import React, { useContext } from 'react'
import ThemeContext from '../../Context/ThemeContext';
import './styles.css'
const ChangeTheme = () => {
    const { isDark, setIsDark } = useContext(ThemeContext)
    const HandleChange = () => {
        setIsDark(!isDark)
    }
    return (
        <div className="theme-switch-wrapper">
            <span className={isDark ? 'Dark' : 'Light'}>{isDark ? 'Mode Dark' : 'Mode Light'}</span>
            <label className="theme-switch">
                <input type="checkbox" id="checkbox"  onChange={HandleChange} />
                <div className="slider round"></div>
            </label>
        </div>
    )
}

export default ChangeTheme
