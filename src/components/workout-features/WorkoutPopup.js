import React, { Component } from 'react'
import '../styles/AddWorkoutPopup.css'

class WorkoutPopup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            actualPage: <></>,
            pos: 0
        }
    }

    timer = (time) => { // Timer function
        if(time >= 0){
            this.setState(prevState => ({
                actualPage: <>{time}</>,
                pos: prevState.pos
            }))
            setTimeout(() => this.timer(time-1), 1000)
        } else {
            this.setState(prevState => ({
                actualPage: <></>,
                pos: prevState.pos+1
            }), () => this.nextPos())
        }
    }

    nextPos = () => { // Next Exercise
        this.setState(prevState => ({
            actualPage: prevState.actualPage,
            pos: prevState.pos+1
        }), () => {
            console.log(this.props.serie[this.state.pos-1])
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
