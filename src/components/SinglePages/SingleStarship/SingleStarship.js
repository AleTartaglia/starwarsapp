import React from 'react'
import LeagueButton from '../../LeagueButton'
import MainAttributesDisplay from '../Components/MainAttributesDisplay'
import SecondaryAttributesDisplay from '../Components/SecondaryAttributesDisplay'

export default ({apiResult, completeData, id, type})=>{
    const mainAttributes = {
        model: completeData.model,
        manufacturer: completeData.manufacturer,
        cost_in_credits: completeData.cost_in_credits,
        length: completeData.length,
        max_atmosphering_speed: completeData.max_atmosphering_speed,
        crew: completeData.crew,
        passengers: completeData.passengers,
        cargo_capacity: completeData.cargo_capacity,
        consumables: completeData.consumables,
        hyperdrive_rating: completeData.hyperdrive_rating,
        starship_class: completeData.starship_class
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
                <SecondaryAttributesDisplay type={'pilots'} array={completeData.pilots} icon={"swg swg-xwingpilot swg-5x"}/>
                </div>
            </div>
            </section>
            : null}
        </div>
    )
}

