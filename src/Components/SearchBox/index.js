import React, { useState } from 'react'
import Logo from '../Logo/index';
import './styles.css'
const SearchBox = ({ onSubmit }) => {
    const [keyword, setKeyword] = useState('')
    const handleSubmit = evt => {
        evt.preventDefault()
        onSubmit({ keyword })
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    return (
        <>
            <Logo />
            <div className="formContent" onSubmit={handleSubmit}>
                <form className="input">
                    <input type="text" placeholder="Search.."  onChange={handleChange} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
        </>
    )
}

export default SearchBox
