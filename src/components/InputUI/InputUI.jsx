import React from 'react'

export const InputUI = ({ holder, event}) => {
  return (
    <input 
      placeholder={holder}
      type="text"
      onChange={event}      
    />
      
  )
}
