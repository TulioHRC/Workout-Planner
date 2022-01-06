import React, { Component } from 'react'

class WorkoutCreation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            serie: [], // Here will be added all the exercises series
            count: 0
        }
    }

    createWorkout = () => {
        this.setState((prevState) => ({ // Adding the new exercise to the actual state
            serie: [...prevState.serie, {
                name: 'Exercise',
                position: prevState.count+1
            }],
            count: prevState.count+1
        }))
    }

    render() {
        const { serie } = this.state

        return (
            <div className='popup-workouts'>
                {
                    
                    serie.map((workout) => {
                        // put the exercise component here
                    })
                    
                }
                <button onClick={this.createWorkout} className='popup-btn-add'>+</button>
            </div>
        )
        // There will be 8 workouts displayed at the same time
    }
}

export default WorkoutCreation
