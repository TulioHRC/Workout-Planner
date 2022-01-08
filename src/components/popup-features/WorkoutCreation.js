import React, { Component } from 'react'
import Exercise from './Exercise'

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
                color: 'gray',
                position: prevState.count+1
            }],
            count: prevState.count+1
        }))
    }

    changeNameHandler = (e, key) => { // Changing the state of each element of the exercises by the name
        this.setState((prevState) => ({
            serie: [...prevState.serie.slice(0,key-1), 
                        { name: e.target.value, color: prevState.serie.slice(key-1, key)[0].color, position: key},
                        ...prevState.serie.slice(key)],
            count: prevState.count
        }))
    }

    changeColorHandler = (e, key) => {
        console.log(e.target.value)
        this.setState((prevState) => ({
            serie: [...prevState.serie.slice(0,key-1), 
                        { name: prevState.serie.slice(key-1, key)[0].name, color: e.target.value, position: key},
                        ...prevState.serie.slice(key)],
            count: prevState.count
        }))
    }

    render() {
        const { serie } = this.state

        return (
            <div className='popup-workouts'>
                {
                    
                    serie.map((workout) => {
                        return <Exercise 
                                    name={workout.name}
                                    color={workout.color}
                                    pos={workout.position} 
                                    onChangeName={(e) => this.changeNameHandler(e, workout.position)} 
                                    onChangeColor={(e) => this.changeColorHandler(e, workout.position)} 
                                    key={workout.position} 
                                />
                        // put the exercise component here
                    })
                    
                }
                <button onClick={this.createWorkout} className='popup-btn-add' key='add'>+</button>
            </div>
        )
        // There will be 8 workouts displayed at the same time
    }
}

export default WorkoutCreation
