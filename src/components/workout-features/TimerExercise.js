import React, { Component } from 'react'

class TimerExercise extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            time: Number(this.props.time)
        }

        this.timer(this.state.time)
    }
    

    timer = (time) => { // Timer function
        if(time >= 0){
            this.setState(prevState => ({
                time: time
            }))
            setTimeout(() => this.timer(time-1), 1000)
        } else {
            this.setState(prevState => ({
                time: time
            }), () => this.props.nextPos())
        }
    }

    render() {
        return (
            <div className='popup-exercise-screen' style={{background: this.props.color}}>
                <p className='popup-exercise-screen-name'>{this.props.name}</p>
                <p className='popup-exercise-screen-time'>{this.state.time}</p>
            </div>
        )
    }
}

export default TimerExercise
