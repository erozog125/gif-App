import React from 'react';

export const Card = ({ title, img }) => {
  return (
    <div className='card' >
      <h2>{title}</h2>
      <img src={img} alt={title} />
    </div>        
  )
}
