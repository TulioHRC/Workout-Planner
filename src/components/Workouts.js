import React, { Component } from 'react'
import './styles/Workouts.css'
import WorkoutArea from './WorkoutsArea'


class Workouts extends Component { 
    render() {
        const { plans } = this.props

        return plans.length !== 0 ? (
            <div className='workouts'>
                {
                    plans.map((plan) => {
                        return (
                            <WorkoutArea serie={plan.serie} count={plan.count} name={plan.name} key={plan.id} />
                        )
                    })
                }
            </div>
        ) : (
            <div className='workout-image'>
                <img src="Workouts image.png" alt="Create your first workout plan" />
            </div>
        )
    }
}

export default Workouts
