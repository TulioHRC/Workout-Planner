import React, { Component } from 'react'
import './styles/AddWorkoutPopup.css'
import Form from './popup-features/Form'
import WorkoutCreation from './popup-features/WorkoutCreation'

class AddWorkoutPopup extends Component {
    constructor(props) {
        super(props)
    
        this.SerieRef = React.createRef()
        this.state = {
            name: ''
        }
    }

    nameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    

    render() {
        const { name } = this.state
        const { visibility, closeFunction, addFunction } = this.props

        return visibility ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button className='popup-btn-close' onClick={closeFunction}>X</button>
                    <Form changeHandler={this.nameChange} />
                    <p className='popup-text'>Workouts Series</p>
                    <WorkoutCreation ref={this.SerieRef} />
                    <button className='popup-btn-create' onClick={() => addFunction(this.SerieRef.current.state, name)}>Create</button>
                </div>
            </div>
        ) : ( <></> )
    }
}

export default AddWorkoutPopup
