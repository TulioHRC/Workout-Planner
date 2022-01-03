import React, { Component } from 'react'
import './styles/AddWorkoutPopup.css'
import Form from './popup-features/Form'

class AddWorkoutPopup extends Component {
    render() {
        const { visibility, closeFunction } = this.props

        return visibility ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button className='popup-btn-close' onClick={closeFunction}>X</button>
                    <Form />
                    <p className='popup-text'>Workouts Series</p>
                    <button className='popup-btn-create'>Create</button>
                </div>
            </div>
        ) : ( <></> )
    }
}

export default AddWorkoutPopup
