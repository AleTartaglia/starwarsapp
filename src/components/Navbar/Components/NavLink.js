import React from 'react'
import {NavLink} from 'react-router-dom'

export default ({type, active})=>{
    return(
        <NavLink className="navbar__link" activeClassName="navbar__link navbar__link--active" to={`/${type}`}>
                        {type}
        {active === type?<div className='navbar__link__underline'/>:null}
        </NavLink>
    )
}