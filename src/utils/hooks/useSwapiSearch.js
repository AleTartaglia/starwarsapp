import {useEffect, useState} from 'react'
import queryString from "query-string";
import axios from 'axios';

export default (name, location, history)=>{
    const [page, setPage] = useState({})
    const [loading, setLoading] = useState(true)
    const pageNumber = queryString.parse(location.search).page || 1
    const search = queryString.parse(location.search).search
    useEffect(
        ()=>{
            axios.get(`http://swapi.dev/api/${name}/?search=${search}&page=${pageNumber}`)
            .then(result => {
                setLoading(false)
                setPage(result.data)}
            ).catch(()=>{
                history.push('/pageNotFound')
            })
        },[location.search,history,name,pageNumber,search]
    )
    return [page, loading]
}