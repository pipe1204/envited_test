import React from 'react'
import Detail from '../../components/details/Detail'
import event from "../../assets/Event.png"
import stroke from "../../assets/Stroke.png"
import "./event.css"

import { BsCalendar2Check } from "react-icons/bs"
import { GoLocation } from "react-icons/go"

const EnvitedEvent = ({data}) => {
    
    console.log(data)
  return (
    <div className='event__content'>
        <div className='event__content__details'>
            <div className='event__content__header'>
                <h1>{data.eventname}</h1>
                <p>Hosted by <span>{data.hostname}</span></p>
            </div>
            <div className='event__content__deatils'>
                <Detail 
                    icon={<BsCalendar2Check size={30} color={'#8456EC'}/>}
                    title={`from ${data.startdate}`}
                    subtitle={`to ${data.enddate}`}
                    selectIcon={stroke}
                />
                <Detail 
                    icon={<GoLocation size={30} color={'#8456EC'}/>}
                    title="Location"
                    subtitle={data.place}
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