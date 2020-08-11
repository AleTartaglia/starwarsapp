import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {fetchLeague} from '../../store/actions/league'
import {Link} from 'react-router-dom'
import GalacticLeague from './GalacticLeague'
import '../style.scss'

export default ()=>{
    const league = useSelector(state => state.league)
    const dispatch = useDispatch()

    useEffect(
        ()=> {
            dispatch(fetchLeague())
        },[dispatch]
    )

    const handleRemove = (type, elementId) =>{
        localStorage.removeItem(type+"-"+elementId)
        if(type === 'species' && league.people){
            let peopleSameSpecies = league.people.filter((person)=>{
                return person.species[0] && person.species[0] === `http://swapi.dev/api/species/${elementId}/`
            })
            peopleSameSpecies.forEach((person)=>{
                let personId = person.url.split('/')[5]
                localStorage.removeItem(`people-${personId}`)
            })
        }
        dispatch(fetchLeague())
    }

    return(
        <section>
            <div>
               My Galactic League 
            </div>
            {
                !league.people? 
                <Link className={"start"} to='/people'>
                    <i className="swg swg-stormtrooper-3 swg-5x start__icon"></i>
                    <p className={"start__text"}>Add a character to start</p> 
                </Link>
                : <div>
                    <GalacticLeague galacticLeague={league} handleRemove={handleRemove}/>
                    {/* <h2>People</h2>
                    {league.people.map((person)=><p>{person.name}</p>)}
                    <h2>Species</h2>
                    {league.species? league.species.map((species)=><p>{species.name}</p>): <p>No species</p>} */}

                </div>
            }
        </section>
    )
}