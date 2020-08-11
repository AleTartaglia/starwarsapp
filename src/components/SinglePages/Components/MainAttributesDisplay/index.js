import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

export default ({attributes})=>{
    
    return(
        <div className="main-attributes">
            <ul className="main-attributes__list">
                    {Object.keys(attributes).map((key)=>{
                        let name= key.split('_').join(" ")
                        if(key==="homeworld" && attributes[key]) {
                            return (
                            <li className="main-attributes__item" key={key}>
                                <span className="main-attributes__item__name" >{key}:</span> 
                                <Link to={attributes[key].url} className="main-attributes__item__link">
                                    {` ${attributes[key].name}`}
                                </Link>
                            </li>)
                        }
                        return (
                        <li className="main-attributes__item" key={key}>
                            <span className="main-attributes__item__name" >{name}:</span> {attributes[key]}
                        </li>)
                    })}
            </ul>
        </div>
    )
}