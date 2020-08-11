import React, { useEffect, useState } from "react"
import axios from 'axios'
import SingleStarship from "./SingleStarship"

export default ({match, history})=>{
    const [apiResult, setApiResult] = useState({})
    const [completeData, setCompleteData] = useState({})

    useEffect(
        ()=> {
        async function fetchStarship(){
        try{
            const starship = await axios.get(`http://swapi.dev/api/starships/${match.params.id}/`).then(result=>result.data)
            const films = await Promise.all(transformFetch(starship.films, "title"))
            const pilots = await Promise.all(transformFetch(starship.pilots, "name"))
            setApiResult(starship)
            setCompleteData({...starship,films,pilots})
        }catch{
            history.push('/pageNotFound')
        }
        }
        fetchStarship()
        }, 
        [match.params.id, history]
    )

    const transformFetch = (array, name)=>{
        return array.map((url)=> axios.get(url).then(result=>{
            return{
                name: result.data[name],
                url: result.data.url.slice(20, -1)
            }
        }))
    }
    return(
        <SingleStarship apiResult={apiResult} completeData={completeData} id={match.params.id} type={'starships'}/>
    )
}