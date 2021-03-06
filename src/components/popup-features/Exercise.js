import React from 'react'

function Exercise(props) {
    let numInput = props.type === 'Timer' ? <div>
        <label htmlFor="numInput">Seconds:</label>
        <input type="number" id='numInput' min='1' max='99999' step='5' onChange={props.onChangeTimes} />
    </div> : <div>
        <label htmlFor="numInput">Quantity:</label>
        <input type="number" id='numInput' min='1' onChange={props.onChangeTimes} />
    </div>

    return (
        <div id={props.pos} className='popup-workouts-form' style={{backgroundColor: props.color}}>
            <p>{props.pos}.</p>

            <input type="text" value={props.name} onChange={props.onChangeName} />
            
            <div>
                <input type="radio" name={"type" + props.pos} id='timer' value="Timer" onChange={props.onChangeType} checked={props.type==='Timer'} />
                <label htmlFor="timer">Timer</label>
                <input type="radio" name={"type" + props.pos} id='click' value="Click" onChange={props.onChangeType} checked={props.type==='Click'} />
                <label htmlFor="click">Click</label>
            </div>

            {numInput}

            <select name="colors" id="colors" onChange={props.onChangeColor} value={props.color}>
                <option value="gray">Gray</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
            </select>
        </div>
    )
}

export default Exercise
