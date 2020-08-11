import React from 'react'
import {Link} from 'react-router-dom'
import '../styles.scss'

export default ({input, handleChange, type})=>{
    return (
        <section>
            <form className="filter">
                <input className={"filter__input"}type="text" id="searchInput" name="searchInput" placeholder={`Filter ${type}`} onChange={handleChange}/>
                <Link to={`/${type}?search=${input}&page=1`}>
                    <button className='filter__submit'><i class="fas fa-search"></i></button>
                </Link>
            </form>
        </section>
    )
}