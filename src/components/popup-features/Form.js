import React, { Component } from 'react'

class Form extends Component {
    render() {
        return (
            <div className='popup-form'>
                <input className='popup-form-input' type="text" maxLength="20" placeholder='Workout plan name' />
            </div>
        )
    }
}

export default Form
