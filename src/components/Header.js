import React from 'react'
import './styles/Header.css'
import Title from './Title'
import AddPlanButton from './AddPlanButton'


const Header = (props) => {
    const { title } = props

    return(
        <div className='header'>
            <Title value={title} />
            <AddPlanButton />
        </div>
        
    )
}

export default Header