import React, { Component } from 'react'
import './styles/Header.css'
import Title from './Title'
import AddPlanButton from './AddPlanButton'
import AddWorkout from './AddWorkout'


class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             popupView: false
        }
    }

    changePopupView = () => {
        this.setState(prevState => {
            return { popupView: !prevState.popupView }
        }, () => console.log(this.state.popupView))
    }    

    render() {
        const { title } = this.props

        return (
            <div className='header'>
                <Title value={title} />
                <AddPlanButton addFunction={this.changePopupView} />
                <AddWorkout visibility={this.state.popupView} closeFunction={this.changePopupView} />
            </div>
        )
    }
}

export default Header