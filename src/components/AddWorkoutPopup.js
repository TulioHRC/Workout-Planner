import React, { Component } from 'react'
import './styles/AddWorkoutPopup.css'
import Form from './popup-features/Form'
import WorkoutCreation from './popup-features/WorkoutCreation'

class AddWorkoutPopup extends Component {
    constructor(props) {
        super(props)
    
        this.SerieRef = React.createRef()
    }
    

    render() {
        const { visibility, closeFunction, addFunction } = this.props

        return visibility ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button className='popup-btn-close' onClick={closeFunction}>X</button>
                    <Form />
                    <p className='popup-text'>Workouts Series</p>
                    <WorkoutCreation ref={this.SerieRef} />
                    <button className='popup-btn-create' onClick={() => addFunction(this.SerieRef.current.state)}>Create</button>
                </div>
            </div>
        ) : ( <></> )
    }
}

export default AddWorkoutPopup
