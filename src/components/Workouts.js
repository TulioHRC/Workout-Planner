import React, { Component } from 'react'
import './styles/Workouts.css'


class Workouts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             plans: []
        }
    }
    

    render() {
        const { plans } = this.state

        return plans.length != 0 ? (
            <div className='workouts'>
                {
                    plans.forEach((plan) => {
                        return (
                            <p>plan.name</p>
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
