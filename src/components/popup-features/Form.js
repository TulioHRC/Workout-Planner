import React, { Component } from 'react'

class Form extends Component {
    render() {
        const { changeHandler } = this.props

        return (
            <div className='popup-form'>
                <input className='popup-form-input' type="text" minLength="3" maxLength="15" placeholder='Workout plan name' onChange={(e) => changeHandler(e)} />
            </div>
        )
    }
}

export default Form
