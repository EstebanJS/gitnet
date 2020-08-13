import React from 'react'
import Logo from '../Logo/index';
import './styles.css'
const SearchBox = () => {
    return (
        <>
            <Logo/>
            <div className="formContent">
            <form className="input">
                <input type="text" placeholder="Search.." name="search" />
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>
            </div>
        </>
    )
}

export default SearchBox
