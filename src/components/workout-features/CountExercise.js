import React, { Component } from 'react'

class CountExercise extends Component {
    render() {
        return (
            <div>
                {this.props.name}
                {this.props.color}
            </div>
        )
    }
}

export default CountExercise
