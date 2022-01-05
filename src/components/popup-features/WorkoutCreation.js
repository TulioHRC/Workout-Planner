import React, { Component } from 'react'

class WorkoutCreation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            serie: [] // Here will be added all the exercises series
        }
    }
    

    render() {
        return (
            <div className='popup-workouts'>
                <button className='popup-btn-add'>+</button>
            </div>
        )
        // popup-workouts can be grid displayed
    }
}

export default WorkoutCreation
