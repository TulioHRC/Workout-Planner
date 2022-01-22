import React, { Component } from 'react'
import WorkoutPopup from './workout-features/WorkoutPopup'

export class WorkoutArea extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            popupView: false
        }
    }
    

    viewWorkout = () => {
        this.setState(prevState => {
            return { popupView: !prevState.popupView }
        })
    }

    render() {
        const { serie, count, name } = this.props

        return (
            <>
                <div className='workouts-area'>
                    <p className='workouts-area-name'>{name}</p>
                    <button className='workouts-area-button' onClick={this.viewWorkout}>&#10148;</button>
                </div>
                <WorkoutPopup view={this.state.popupView} serie={serie} count={count} closeFunction={this.viewWorkout} />
            </>
        )
    }
}

export default WorkoutArea

