import React from 'react'
import phone from "../../assets/image 1.png"
import "./phone.css"
import { Link } from 'react-router-dom'
import MainButton from '../button/MainButton'

const Phone = () => {
  return (
    <div className='phone__content'>
        <img src={phone}/>
        <div className='responsive__button'>
          <Link to="/create"><MainButton /></Link>
        </div>
    </div>
  )
}

export default Phone