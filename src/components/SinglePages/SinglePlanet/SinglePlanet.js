import React from 'react'
import LeagueButton from '../../LeagueButton'
import MainAttributesDisplay from '../Components/MainAttributesDisplay'
import SecondaryAttributesDisplay from '../Components/SecondaryAttributesDisplay'

export default ({apiResult, completeData, id, type})=>{
    const mainAttributes ={ 
        name: completeData.name,
        rotation_period: completeData.rotation_period,
        orbital_period: completeData.orbital_period,
        diameter: completeData.orbital_period,
        climate: completeData.climate,
        gravity: completeData.gravity,
        terrain: completeData.terrain,
        surface_water: completeData.surface_water,
        population: completeData.population
    }
     return(
        <div>
            {completeData.name ? 
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
                    <SecondaryAttributesDisplay type={'residents'} array={completeData.residents} icon={"swg swg-leia swg-5x"}/>
                </div>
            </div>
            </section>
            : null}
        </div>
    )
}

