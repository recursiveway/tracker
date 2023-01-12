import React from 'react'
import './Trydate.css'

const Trydate = ({ date }) => {
  // console.log()
  return (
    <div className='trydate'>
      <div>{date.toLocaleString('en-US', { month: 'long' })}</div>
      <div>{date.toLocaleString('en-US', { year: 'numeric' })}</div>
      <div>{date.toLocaleString('en-US', { day: '2-digit' })}</div>
    </div>
  )
}

export default Trydate