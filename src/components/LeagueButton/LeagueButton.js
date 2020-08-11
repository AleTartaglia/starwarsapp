import React from "react"

export default({handleAdd, handleRemove, buttonValue, className}) =>{
    if(buttonValue === "add") {return <button onClick={handleAdd} className={`${className} add`}> <span>Add</span></button>} 
    else if(buttonValue === "remove"){return <button onClick={handleRemove} className={`${className} remove`}> <span>Remove</span></button>} 
    else if(buttonValue === "disabled"){return<button disabled={true} className={`${className} disabled`}> <span>No more space!</span></button>} 
    else if(buttonValue === "differentSpecies"){return<button disabled={true} className={`${className} differentSpecies`}> <span>Check species!</span></button>}
}