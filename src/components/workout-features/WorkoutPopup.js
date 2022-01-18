import React, { Component } from 'react'
import '../styles/AddWorkoutPopup.css'
import CountExercise from './CountExercise'
import TimerExercise from './TimerExercise'

class WorkoutPopup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            actualPage: <></>,
            pos: 0
        }
    }

    timer = (time) => { // Initial Timer function
        if(time >= 0){
            this.setState(prevState => ({
                actualPage: <>{time}</>,
                pos: prevState.pos
            }))
            setTimeout(() => this.timer(time-1), 1000)
        } else {
            this.nextPos()
        }
    }

    nextPos = () => { // Next Exercise
        this.setState(prevState => ({
            actualPage: <></>,
            pos: prevState.pos+1
        }), () => {
            console.log(this.state.pos)
            console.log(this.props.count)
            if(this.state.pos <= this.props.count) {     
                this.nextExercise = this.props.serie[this.state.pos-1]
                console.log(this.nextExercise)
                if(this.nextExercise.type === 'Timer'){ // ### Add numbers of seconds or times 
                    this.setState(prevState => ({
                        actualPage: <TimerExercise 
                                        name={this.nextExercise.name} 
                                        color={this.nextExercise.color} 
                                        time={this.nextExercise.times}
                                        nextPos={this.nextPos}
                                    />,
                        pos: prevState.pos
                    }))
                } else {
                    this.setState(prevState => ({
                        actualPage: <CountExercise 
                                        name={this.nextExercise.name} 
                                        color={this.nextExercise.color} 
                                        times={this.nextExercise.times} 
                                        nextPos={this.nextPos}
                                    />,
                        pos: prevState.pos
                    }))
                }
            }
            
        })
    }

    componentDidMount = () => {
        setTimeout(() => this.timer(3), 1000)
    }
    

    render() {
        return this.props.view ? (
            <div className='popup-box'>
                <div className='popup'>
                    <button className='popup-btn-close' onClick={this.props.closeFunction}>X</button>
                    {this.state.actualPage}
                </div>
            </div>
        ) : ( <></> )
    }
}

export default WorkoutPopup
