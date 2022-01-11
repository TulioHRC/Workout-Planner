import React, { Component } from 'react'
import './styles/Workouts.css'
import WorkoutArea from './WorkoutArea'


class Workouts extends Component { 
    render() {
        const { plans } = this.props

        return plans.length !== 0 ? (
            <div className='workouts'>
                {
                    plans.map((plan) => {
                        return (
                            <WorkoutArea serie={plan.serie} count={plan.count} name={plan.name} />
                        )
                    })
                }
            </div>
        ) : (
            <div className='workouts'>
                <img src="Workouts image.png" alt="Image: Create your first workout plan" />
            </div>
        )
    }
}

export default Workouts
