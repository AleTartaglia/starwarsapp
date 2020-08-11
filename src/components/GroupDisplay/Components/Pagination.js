import React from "react"
import Pagination from "react-js-pagination";

import "../styles.scss"
import queryString from "query-string";

export default ({url, history, count})=>{
    let currentPage = queryString.parse(history.location.search).page? Number(queryString.parse(history.location.search).page) : 1

    const handlePageClick = (pageNumber)=>{
        history.push(url+pageNumber)
    }

    return(
        <Pagination
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={count}
            pageRangeDisplayed={5}
            onChange={handlePageClick}
            innerClass={'pagination'}
            itemClass={'pagination__pages'}
            linkClass={'pagination__pages'}
            activeClass={'active'}
            activeLinkClass={'pagination__pages--active'}
        />
    )
}