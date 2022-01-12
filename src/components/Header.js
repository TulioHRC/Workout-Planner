import React, { Component } from 'react'
import './styles/Header.css'
import Title from './Title'
import AddPlanButton from './AddPlanButton'
import AddWorkoutPopup from './popup-features/AddWorkoutPopup'


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
        })
    }

    render() {
        const { title } = this.props

        return (
            <div className='header'>
                <Title value={title} />
                <AddPlanButton addFunction={this.changePopupView} />
                <AddWorkoutPopup visibility={this.state.popupView} closeFunction={this.changePopupView} addFunction={this.props.addFunction} />
            </div>
        )
    }
}

export default Header