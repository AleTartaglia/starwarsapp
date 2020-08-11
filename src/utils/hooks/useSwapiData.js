import {useEffect, useState} from 'react'
import queryString from "query-string";
import axios from 'axios';

export default (name, location, history)=>{
    const [page, setPage] = useState({})
    const [loading, setLoading] = useState(true)
    const pageNumber = queryString.parse(location.search).page || 1
    useEffect(
        ()=>{
            axios.get(`http://swapi.dev/api/${name}/?page=${pageNumber}`)
            .then(result => {
                setPage(result.data)
                setLoading(false)
            }).catch(()=>{
                history.push('/pageNotFound')
            })
        },[location.search,history,name,pageNumber]
    )
    return [page,loading]
}
