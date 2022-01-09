import React, { Component } from 'react'
import './styles/Workouts.css'


class Workouts extends Component { 
    render() {
        const { plans } = this.props

        console.log(plans[0].serie)

        return plans.length !== 0 ? (
            <div className='workouts'>
                {
                    plans.map((plan) => {
                        return (
                            <p>{plan.count}</p>
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
