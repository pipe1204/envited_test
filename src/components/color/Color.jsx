import React from 'react'
import "./color.css"

const Color = ({color, code}) => {
  return (
    <div className='color__content'>
        <div className='color__box' style={{backgroundColor: color}}></div>
        <h1 className='color__code'>{code}</h1>
    </div>
  )
}

export default Color