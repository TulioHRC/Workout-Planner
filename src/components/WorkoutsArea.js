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
                <div>
                    {name}
                    <button onClick={this.viewWorkout}>Start</button>
                </div>
                <WorkoutPopup view={this.state.popupView} serie={serie} closeFunction={this.viewWorkout} />
            </>
        )
    }
}

export default WorkoutArea

