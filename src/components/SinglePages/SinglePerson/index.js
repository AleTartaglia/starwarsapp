import React, { useEffect, useState } from "react"
import axios from 'axios'
import SinglePerson from "./SinglePerson"
import Loader from "../../Loader"

export default ({match, history})=>{
    const [apiResult, setApiResult] = useState({})
    const [completeData, setCompleteData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(
        ()=> {
        async function fetchCharacter(){
            try{
                const character = await axios.get(`http://swapi.dev/api/people/${match.params.id}/`).then(result=>result.data)
                const homeworld = await axios.get(character.homeworld).then(result=>{return{name: result.data.name, url: result.data.url.slice(20, -1) }})
                const films = await Promise.all(transformFetch(character.films, "title"))
                const species = await Promise.all(transformFetch(character.species, "name"))
                const starships = await Promise.all(transformFetch(character.starships, "name"))
                const vehicles = await Promise.all(transformFetch(character.vehicles, "name"))
                setLoading(false)
                setApiResult(character)
                setCompleteData({...character,films,homeworld,starships, vehicles, species})
            }catch{
                history.push('/pageNotFound')
            }   
        }
        fetchCharacter()
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
                <SinglePerson completeData={completeData} id={match.params.id} type={"people"} apiResult={apiResult}/>
            }
        </section>
    )
}