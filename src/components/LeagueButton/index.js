import React, {useState, useEffect} from "react"; 
import {useDispatch, useSelector} from 'react-redux';
import LeagueButton from "./LeagueButton";
import {fetchLeague} from '../../store/actions/league'
import axios from "axios";

export default ({elementId, element, type, className})=>{
    const [buttonValue, setButtonValue] = useState("disabled")
    const league = useSelector(state => state.league)

    const dispatch = useDispatch()

    const maxValues = {
        people: 6,
        species: 3,
        starships: 3,
        planets: 2
    }

    useEffect(
        ()=>{
            let added = league[type] && league[type].some(element => element.id === elementId)
            if(added) setButtonValue("remove")
            else {
                if(Boolean(league[type]) && league[type].length >= maxValues[type]) setButtonValue('disabled')
                else if(type ==='people' && element.species[0] && league.species && league.species.length === 3 && !league.species.some(species => species.id === element.species[0].split('/')[5])) setButtonValue('differentSpecies')
                else setButtonValue("add")
            }    
        }, [league, element.species, elementId, maxValues, type]
    )

    useEffect(
        ()=>{
            dispatch(fetchLeague())
        }, [dispatch,buttonValue]
    )

    
    const handleAdd = ()=>{
        localStorage.setItem(type+"-"+elementId, JSON.stringify(element))
        if(type==='people' && element.species[0]){
            let speciesId = element.species[0].split('/')[5]
            let speciesAdded = JSON.parse(localStorage.getItem(`species-${speciesId}`))
            console.log(speciesAdded)
            if(!speciesAdded) {
                axios.get(element.species)
                .then(result => localStorage.setItem(`species-${speciesId}`+speciesId, JSON.stringify(result.data)))
                .then(()=> setButtonValue("remove"))
            }
            else{
                setButtonValue("remove")
            }
        }
        else{
            setButtonValue("remove")
        }
    }

    const handleRemove = ()=>{
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
        setButtonValue("add")
    }

    return <LeagueButton className={className} handleAdd={handleAdd} handleRemove={handleRemove} buttonValue={buttonValue}/>
}