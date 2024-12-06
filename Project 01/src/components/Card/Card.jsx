import React from 'react'
import './Card.css'

const Card = ({title, purpose}) => {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{purpose}</p>
      <button>View details</button>
    </div>
  )
}

export default Card