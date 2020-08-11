import React from "react"
import Navbar from './Navbar'

export default ({location})=>{
    const active = location.pathname.split('/')[1]
    return(
        <Navbar active={active}/>
    )
}