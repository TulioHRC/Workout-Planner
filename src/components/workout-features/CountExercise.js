import React, { Component } from 'react'

class CountExercise extends Component {
    render() {
        return (
            <div className='popup-exercise-screen' style={{background: this.props.color}}>
                <p className='popup-exercise-screen-name'>{this.props.name} - <strong>{this.props.times}</strong></p>
                <button className='popup-exercise-screen-btn' onClick={this.props.nextPos}>Next</button>
            </div>
        )
    }
}

export default CountExercise
