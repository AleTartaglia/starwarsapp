import React from "react"
import {Link} from 'react-router-dom'
import NavLink from './Components/NavLink'
import './style.scss'
import logo from '../../assets/images/logo.png'

export default ({active})=>{
    return(
        <header>
        <div className="header__top">
            <div className="logo-box">
            <img className="logo" src={logo} alt="logo"/>
            </div>
            <Link to="/myGalacticLeague" className="league-link">
                <div className="league-link__container">
                    <div className="league-link__icon">
                     <i className="swg swg-reball swg-6x">
                        </i>
                    </div>
                <div className="league-link__text">
                    My Galactic League
                </div>
            </div>
            </Link>
        </div>
        <nav className="navbar">
            <div className="navbar__left"> </div>
            <div>
                <NavLink type={'people'} active={active}/>
                <NavLink type={'planets'} active={active}/>
                <NavLink type={'species'} active={active}/>
                <NavLink type={'starships'} active={active}/>
            </div>
            <div className="navbar__right"> </div>
        </nav>
        </header>
    )
}