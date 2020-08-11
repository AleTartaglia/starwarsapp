import React from "react";
import Pagination from "./Pagination"
import Card from "./Card.js"
import NoResults from '../../NoResults'
import '../styles.scss'

export default ({page, type, history, url})=>{
    return(
        <section className="grid-container">
          {page.results.length?  
            page.results.map(element=>{
             return (
                 <Card element={element} key={element.name} type={type}/>
             )
         }):<NoResults/>}
         <Pagination history={history} count={page.count} url={url} pageCount={Math.ceil(page.count/10)}/>
         </section>
    )        
}