import React from "react"
import './style.scss'

export default ()=>{
    return(
    <section className={'no-results'}>
        <i className="swg swg-yoda-2 swg-6x no-results__icon"></i>  
        <p className="no-results__text">No results match. Something else, you must try.</p>
    </section>
    )
}