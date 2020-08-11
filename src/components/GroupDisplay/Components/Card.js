import React from 'react'
import '../styles.scss'
import LeagueButton from '../../LeagueButton'
import {Link} from "react-router-dom"


export default ({ element, type, apiResult})=>{
    let url = element.url.slice(20, -1)
    let id = url.slice(2+type.length)
    
    return(
        <div className="card" >
            <Link to={url}>
            <div className="card__title">
                <p>{element.name}</p>
            </div>
            </Link>
            <div>
                <LeagueButton className="league-button" element={element} elementId={id} type={type}/>
            </div>
        </div>
    )
}