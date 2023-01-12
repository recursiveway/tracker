import React from 'react'
import './Caed.css'
const Card = (props) => {
    return (
        <div className='card'>{props.children}</div>
    )
}

export default Card