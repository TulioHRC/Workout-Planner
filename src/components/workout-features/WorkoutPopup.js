import React, { Component } from 'react'
import '../styles/AddWorkoutPopup.css'

export class WorkoutPopup extends Component {
    render() {
        return this.props.view ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button className='popup-btn-close' onClick={this.props.closeFunction}>X</button>
                </div>
            </div>
        ) : ( <></> )
    }
}

export default WorkoutPopup
