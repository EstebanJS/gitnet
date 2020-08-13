import React from 'react'
import { Link } from 'wouter'
import './styles.css'

const Category = ({name, options = [] }) => {
    return (
        <div className="listTrending">
            <h2>{name}</h2>
            <ul>
                {
                    options.map(option => (
                        <li key={option}>
                            <Link className="link" to={`/search/${option}`}>
                                <i className="fa fa-chevron-right" ></i>{option}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default React.memo (Category)
