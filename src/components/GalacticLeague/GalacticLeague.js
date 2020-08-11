import React from 'react'
import LeagueCard from './LeagueCard'

export default({galacticLeague, handleRemove}) => {
    let loopType = (type, length)=>{
        let array = []
        for(let i=0; i<length; i++){
            if(galacticLeague[type] && galacticLeague[type][i]) array.push(<LeagueCard type={type} element={galacticLeague[type][i]} handleRemove={handleRemove}/>)
            else array.push(<LeagueCard type={type} element={null} handleRemove={handleRemove} />)
        }
        return array
    }
    return(
        <section>
            <div>
                <h2 className="group-title">Characters</h2>
                <div className="group-container">
                    {loopType('people', 6).map((element)=> element)}
                </div>
            </div>
            <div>
                <h2 className="group-title">Species</h2>
                <div className="group-container">
                    {loopType('species', 3).map((element)=> element)}
                </div>
            </div>
            <div>
                <h2 className="group-title">Planets</h2>
                <div className="group-container">
                    {loopType('planets', 2).map((element)=> element)}
                </div>
            </div>
            <div>
                <h2 className="group-title">Starships</h2>
                <div className="group-container">
                    {loopType('starships', 2).map((element)=> element)}
                </div>
            </div>
        </section>
    )
}