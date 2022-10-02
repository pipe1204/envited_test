import "./event.css"
import Detail from '../../components/details/Detail'
import event from "../../assets/Event.png"
import stroke from "../../assets/Stroke.png"
import MainButton from "../../components/button/MainButton"
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
import snapchat from "../../assets/snapchat.png"
import tiktok from "../../assets/tik-tok.png"


import { BsCalendar2Check } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { GiConverseShoe } from "react-icons/gi"

const EnvitedEvent = ({data}) => {

  return (
    <div className='event__content'>
        <div className='event__content__details'>
            <div className='event__content__header'>
                <h1>{data.eventname}</h1>
                <p>Hosted by <span>{data.hostname}</span></p>
            </div>
            <div className='event__content__deatils__info'>
                <Detail 
                    icon={<BsCalendar2Check size={30} color={'#8456EC'}/>}
                    title="When"
                    subtitle={`${data.startdate} at ${data.time}`}
                    selectIcon={stroke}
                />
                <Detail 
                    icon={<GoLocation size={30} color={'#8456EC'}/>}
                    title="Location"
                    subtitle={`${data.address}, ${data.suburb}, ${data.postcode}`}
                    selectIcon={stroke}
                />
                <Detail 
                    icon={<GiConverseShoe size={30} color={'#8456EC'}/>}
                    title="Dress Code"
                    subtitle={data.dress}
                    selectIcon={stroke}
                />
                <div className="share__button__content">
                    <MainButton text="Share invitation"/>
                </div>
                <div className="social__icons__content">
                    <img src={whatsapp}/>
                    <img src={instagram}/>
                    <img src={snapchat}/>
                    <img src={facebook}/>
                    <img src={tiktok}/>
                </div>
            </div>
        </div>
        <div className='event__image'>
            <img src={event}/>
        </div>
    </div>
  )
}

export default EnvitedEvent