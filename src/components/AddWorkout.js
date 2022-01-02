import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class AddWorkout extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return ReactDOM.createPortal(
            <div className='popup'>
                <div style={
                    {
                        position: 'absolute',
                        top: '25%',
                        left: '25%',
                        width: '50%',
                        height: '50%',
                        background: 'white'
                    }
                }>
                    a
                    {this.props.visibility}
                </div>
            </div>, document.getElementById('add-workout')
        )
    }
}

export default AddWorkout
