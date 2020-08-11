import React, { useEffect, useState } from "react"
import axios from 'axios'
import SingleSpecies from "./SingleSpecies"
import Loader from "../../Loader"

export default ({match,history})=>{
    const [apiResult, setApiResult] = useState({})
    const [completeData, setCompleteData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(
        ()=> {
        async function fetchSpecies(){
        try{
            const species = await axios.get(`http://swapi.dev/api/species/${match.params.id}/`).then(result=>result.data)
            const homeworld = await axios.get(species.homeworld).then(result=>{return{name: result.data.name, url: result.data.url.slice(20, -1) }}).catch(()=>console.log("No homeworld"))
            const films = await Promise.all(transformFetch(species.films, "title"))
            const people = await Promise.all(transformFetch(species.people, "name"))
            setLoading(false)
            setApiResult(species)
            setCompleteData({...species,homeworld,films,people})
        }catch{
            history.push('/pageNotFound')
        }

        }
        fetchSpecies()
        }, 
        [match.params.id, history]
    )

    const transformFetch = (array, name)=>{
        return array.map((url)=> axios.get(url).then(result=>{
            return{
                name: result.data[name],
                url: result.data.url.slice(20, -1)
            }
        }).catch(()=>console.log("no"+ name))
        )
    }

    return(
        <section>
            {loading?
                <Loader/>:
                <SingleSpecies apiResult={apiResult} completeData={completeData} id={match.params.id} type={'species'}/>
            }
        </section>
    )
}
