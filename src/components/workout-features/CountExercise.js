import React, { Component } from 'react'

class CountExercise extends Component {
    render() {
        return (
            <div className='exercise' style={{background: this.props.color}}>
                <p>{this.props.name}</p>
                <button onClick={this.props.nextPos}>Next</button>
            </div>
        )
    }
}

export default CountExercise
