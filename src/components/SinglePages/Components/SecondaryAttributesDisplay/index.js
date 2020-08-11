import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default ({type, array, icon}) =>{
    return(
        <section className={"attribute"}>
            <div className={"attribute__title"}>
                <i class={`${icon} attribute__title__icon`}></i>
                <h2 className={"attribute__title__text"}>
                    {type}
                </h2>
                <i class={`${icon} attribute__title__icon`}></i>
            </div>
            <div className={"attribute__list"}>
            {array.length === 0? 
                <p className={"attribute__list__item"}> - </p>: (
                array.map((element)=>{
                    return (
                        <Link to={element.url} className={"attribute__list__item"}>
                            {element.name}
                        </Link>
                    )
                })
            )}
            </div>
        </section>
    )
}