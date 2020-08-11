import React, { useEffect, useState } from "react"
import axios from 'axios'
import SinglePlanet from "./SinglePlanet"
import Loader from "../../Loader"


export default ({match,history})=>{
    const [apiResult, setApiResult] = useState({})
    const [completeData, setCompleteData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(
        ()=> {
        async function fetchPlanet(){
        try{
            const planet = await axios.get(`http://swapi.dev/api/planets/${match.params.id}/`).then(result=>result.data)
            const films = await Promise.all(transformFetch(planet.films, "title"))
            const residents = await Promise.all(transformFetch(planet.residents, "name"))
            setLoading(false)
            setApiResult(planet)
            setCompleteData({...planet,films,residents})
        }catch{
            history.push('/pageNotFound')
        }
        }
        fetchPlanet()
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
        <section>
            {loading?
                <Loader/>:
                <SinglePlanet completeData={completeData} id={match.params.id} type={'planets'} apiResult={apiResult}/>
            }
        </section>
    )
}

