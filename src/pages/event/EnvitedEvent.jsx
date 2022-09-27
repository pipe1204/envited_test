import React from 'react'
import Detail from '../../components/details/Detail'
import event from "../../assets/Event.png"
import stroke from "../../assets/Stroke.png"
import "./event.css"

import { BsCalendar2Check } from "react-icons/bs"
import { GoLocation } from "react-icons/go"

const EnvitedEvent = () => {
  return (
    <div className='event__content'>
        <div className='event__content__details'>
            <div className='event__content__header'>
                <h1>Birthday Bash</h1>
                <p>Hosted by <span>Elysia</span></p>
            </div>
            <div className='event__content__deatils'>
                <Detail 
                    icon={<BsCalendar2Check size={30} color={'#8456EC'}/>}
                    title="18 August 6:00PM"
                    subtitle="to 19 August 1:00PM UTC +10"
                    selectIcon={stroke}
                />
                <Detail 
                    icon={<GoLocation size={30} color={'#8456EC'}/>}
                    title="Street name"
                    subtitle="Suburb, state, Postcode"
                    selectIcon={stroke}
                />
            </div>
        </div>
        <div className='event__image'>
            <img src={event}/>
        </div>
    </div>
  )
}

export default EnvitedEvent