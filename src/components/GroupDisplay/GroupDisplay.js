import React from 'react';
import SearchForm from './Components/SearchForm'
import Grid from './Components/Grid'

export default ({handleChange,page,search,input,type,history}) => {
    return(
        <section className={"group-display"}>
            <SearchForm handleChange={handleChange} input={input} type={type}/>
            {page.results? <Grid page={page} url={search? `/${type}?search=${search}&page=` : `/${type}?page=`} history={history} type={type}/>: <p>No results</p>}
        </section>
    )
}
