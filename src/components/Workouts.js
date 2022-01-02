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

        return (
            <div className='workouts'>
                {
                    plans.forEach((plan) => {
                        return (
                            <p>plan.name</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default Workouts
