import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

export default ({element, type, handleRemove})=>{
    if(element) {
        return (
        <div className="league-card league-card__full">
            <Link className="league-card__full__title" to={element.url.slice(20, -1)}> 
                <div>{element.name.slice(0,14)}</div> 
            </Link>
            <button className="league-card__full__button" onClick={()=>handleRemove(type, element.id)}><span>remove</span></button> 
        </div>
        )
    }
    else {
        let iconClass;
        if(type==='people')  iconClass = "swg swg-darthvader-3 swg-5x"
        if(type==='species') iconClass = "swg swg-wookie swg-5x"
        if(type==='starships') iconClass = "swg swg-falcon swg-5x"
        if(type==='planets') iconClass = "swg swg-galrep swg-5x"

        return(
            <Link  to={`/${type}`}>
            <div className={`league-card league-card__empty league-card__empty--${type}`}>
                <i class={`${iconClass} card-icon`}></i>
                <i class="fas fa-plus plus-icon"></i>
            </div>
            </Link>
        )
    }
}

