import React from 'react'
import Heading from '../../components/heading/Heading'
import Phone from '../../components/phone/Phone'
import "./landing.css"

const Landing = () => {
  return (
    <div className='landing__content'>
        <Phone />
        <Heading />
    </div>
  )
}

export default Landing