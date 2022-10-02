import React from 'react'
import MainButton from '../button/MainButton'
import "./heading.css"
import { Link } from 'react-router-dom'

const Heading = () => {
  return (
    <div className='heading__container'>
        <div className='info__content'>
            <h1 className="main__heading">Imagine if <span className='gradient__text'>Snapchat</span> had events.</h1>
            <p>Easily host and share events with your friends across any social media</p>
            <div className='desktop__button'>
            <Link to="/create"><MainButton text="🎉 Create my event"/></Link>
            </div>
        </div>
    </div>
  )
}

export default Heading