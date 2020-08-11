import React from 'react'
import LeagueButton from '../../LeagueButton'
import SecondaryAttributesDisplay from '../Components/SecondaryAttributesDisplay'
import MainAttributesDisplay from '../Components/MainAttributesDisplay'


export default ({apiResult, completeData, id, type})=>{
    console.log(completeData.homeworld)
    const mainAttributes = {
        name: completeData.name,
        classification: completeData.classification,
        designation: completeData.designation,
        average_height: completeData.average_height,
        skin_colors: completeData.skin_colors,
        hair_colors: completeData.hair_color,
        eye_colors: completeData.eye_colors,
        average_lifespan: completeData.average_lifespan,
        language: completeData.language,
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
                <SecondaryAttributesDisplay type={'people'} array={completeData.people} icon={"swg swg-r2d2-3 swg-5x"}/>
                </div>
            </div>
            </section>
            : null}
        </div>
    )
}

