import React, { useState } from "react";
import useSwapiData from '../../utils/hooks/useSwapiData';
import useSwapiSearch from '../../utils/hooks/useSwapiSearch';
import queryString from "query-string";
import Loader from '../Loader'
import GroupDisplay from './GroupDisplay'

export default ({type, location, history})=>{
    const search = queryString.parse(location.search).search
    const [page, loading] = !search? useSwapiData(type, location, history) : useSwapiSearch(type,location, history)
    const [input, setInput] = useState("")
    
    const handleChange = (e)=>{
        setInput(e.target.value)
    }

    return(
        <section>
            {loading? <Loader/>:
            <GroupDisplay handleChange={handleChange} page={page} search={search} input={input} type={type} history={history}/>
            }
        </section>
    )
}
