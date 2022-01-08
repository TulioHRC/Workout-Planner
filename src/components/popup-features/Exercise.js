import React from 'react'

function Exercise(props) {
    return (
        <div id={props.pos} className='popup-workouts-form' style={{backgroundColor: props.color}}>
            <input type="text" value={props.name} onChange={props.onChangeName} />
            <select name="colors" id="colors" onChange={props.onChangeColor} value={props.color}>
                <option value="gray">Gray</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
        </div>
    )
}

export default Exercise
