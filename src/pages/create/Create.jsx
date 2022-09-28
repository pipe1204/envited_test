import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import FormInput from '../../components/formInput/FormInput'
import "./create.css"
import { Link } from 'react-router-dom';
import EnvitedEvent from '../event/EnvitedEvent';

const Create = () => {

    const [eventDetails, setEventDetails] = useState({
        eventname: "",
        hostname: "",
        place: "",
        startdate: "",
        enddate: "",
        photo: ""
    })

    const inputs = [
        {
            id: 1,
            name: "eventname",
            type: "text",
            placeholder: "Event Name",
            label: "Event Name"
        },
        {
            id: 2,
            name: "hostname",
            type: "text",
            placeholder: "Host Name",
            label: "Host Name"
        },
        {
            id: 3,
            name: "place",
            type: "text",
            placeholder: "Location",
            label: "Location"
        },
        {
            id: 4,
            name: "startdate",
            type: "date",
            placeholder: "Start Date",
            label: "Start Date"
        },
        {
            id: 5,
            name: "enddate",
            type: "date",
            placeholder: "End Date",
            label: "End Date"
        },
        {
            id: 6,
            name: "photo",
            type: "file",
            placeholder: "Event Photo",
            label: "Event Photo"
        },
    ]
    const [isFormVisible, setIsFormVisible] = useState(true)
    const [showNext, setShowNext] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setShowNext(true)
    }

    const onChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value })
    }

    function handleNext() {
        setIsFormVisible(false)
        setShowNext(false)
    }

    

  return (
    <>
        <div className={isFormVisible ? 'form__content' : "hide__form"}>
            <div className='heading__content'>
                <h1 className='form__main__heading'>Invite friends to your</h1><h1 className='gradient__text'><Typewriter
                    options={{
                        strings: ['House warming party', 'Graduation party', 'Farewell party', 'Birthday party', 'Australian Day party', 'Hens party', 'Babyshower'],
                        autoStart: true,
                        loop: true,
                        delay: 75
                    }}
                /></h1>
            </div>
            <form className="gradient__background__2" onSubmit={handleSubmit}>
            {
                inputs.map((input) => (
                    <FormInput 
                        key={input.id} 
                        {...input} 
                        value={eventDetails[input.name]}
                        onchange={onChange}
                    />
                ))
            }
            <button className={showNext ? "hide__event" : 'create__event__button'}>🥳 Create</button>
            <div className={showNext ? "sucessful__message__content" : "hide__event"}>
                <h2 className='gradient__text'>You have created your event! 🎉</h2>
            </div>
            </form>
        </div> 
        <div className={showNext ? "next__button__content" : "hide__event"}>
            <button className='create__event__button' onClick={handleNext}>🥳 Next</button>
        </div>
        <div className={isFormVisible ? "hide__event" : ""}>
            <EnvitedEvent data={eventDetails}/>
        </div>
    </>
  )
}

export default Create