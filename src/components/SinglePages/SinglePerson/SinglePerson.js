import React from 'react'
import LeagueButton from '../../LeagueButton'
import MainAttributesDisplay from '../Components/MainAttributesDisplay'
import SecondaryAttributesDisplay from '../Components/SecondaryAttributesDisplay'
import '../style.scss'

export default ({completeData, id, type, apiResult})=>{
    let mainAttributes = {
        birth_year: completeData.birth_year,
        gender: completeData.gender,
        height: completeData.height,
        mass: completeData.mass,
        hair_color: completeData.hair_color,
        eye_color: completeData.eye_color,
        homeworld: completeData.homeworld

    }
     return(
        <div>
            {completeData.name? 
            <section>
            <div className={"single-header"}>
                <h1 className="single-header__title">{completeData.name}</h1>
                <LeagueButton className="single-header__league-button" element={apiResult} elementId={id} type={type}/> *
            </div>
            <div className='attributes-container'>
                <div className='main-attributes-container' >
                    <MainAttributesDisplay attributes={mainAttributes} />
                </div>
                <div className='secondary-attributes-container' >
                        <SecondaryAttributesDisplay type={'species'} array={completeData.species} icon={'swg swg-akbar swg-5x'}/>
                        <SecondaryAttributesDisplay type={'starships'} array={completeData.starships} icon={'swg swg-tie swg-5x'}/>
                </div>

            </div>
            </section>
            : <p>Loading</p>}
        </div>
    )
}