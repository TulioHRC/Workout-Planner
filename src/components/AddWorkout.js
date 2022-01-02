import React, { Component } from 'react'
import './styles/AddWorkouts.css'

class AddWorkout extends Component {
    render() {
        const { visibility, closeFunction } = this.props

        return visibility ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button onClick={closeFunction}>Close</button>
                </div>
            </div>
        ) : ( <></> )
    }
}

export default AddWorkout
