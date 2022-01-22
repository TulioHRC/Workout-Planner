import React, { Component } from 'react'
import '../styles/AddWorkoutPopup.css'
import '../styles/WorkoutPopupRun.css'
import CountExercise from './CountExercise'
import TimerExercise from './TimerExercise'

class WorkoutPopup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            actualPage: <></>,
            pos: 0,
            run: 0
        }
    }

    timer = (time) => { // Initial Timer function
        if(time >= 0){
            this.setState(prevState => ({
                actualPage: <p className='popup-exercise-initial'>{time}</p>,
                pos: prevState.pos,
                run: 1
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
            if(this.state.pos <= this.props.count) {     
                this.nextExercise = this.props.serie[this.state.pos-1]
                if(this.nextExercise.type === 'Timer'){ // ### Add numbers of seconds or times 
                    this.setState(prevState => ({
                        actualPage: <TimerExercise 
                                        name={this.nextExercise.name} 
                                        color={this.nextExercise.color} 
                                        time={this.nextExercise.times}
                                        nextPos={this.nextPos}
                                    />,
                        pos: prevState.pos,
                        run: 1
                    }))
                } else {
                    this.setState(prevState => ({
                        actualPage: <CountExercise 
                                        name={this.nextExercise.name} 
                                        color={this.nextExercise.color} 
                                        times={this.nextExercise.times} 
                                        nextPos={this.nextPos}
                                    />,
                        pos: prevState.pos,
                        run: 1
                    }))
                }
            } else { // ended
                this.setState(prevState => ({
                    actualPage: <div className='popup-exercise-end'>
                                    <p>Ended</p>
                                    <button className='popup-exercise-end-button' onClick={this.restart}>&#8635;</button>
                                </div>,
                    pos: 0,
                    run: 1
                }))
            }
            
        })
    }

    restart = () => {
        this.setState(prevState => ({
            actualPage: <></>,
            pos: 0,
            run: 0
        }))
    }  

    componentDidUpdate = () => {
        if(this.props.view && this.state.run == 0 && this.state.pos == 0){
            this.timer(3)
        }

        if(!this.props.view && this.state.run == 1){
            this.setState({
                actualPage: <></>,
                pos: 0,
                run: 0
            })
        }
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
