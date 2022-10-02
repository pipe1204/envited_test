import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import FormInput from '../../components/formInput/FormInput'
import "./create.css"
import EnvitedEvent from '../event/EnvitedEvent';
import Confetti from 'react-confetti';

const Create = () => {

    const [eventDetails, setEventDetails] = useState({
        eventname: "",
        hostname: "",
        place: "",
        startdate: "",
        enddate: "",
        dress: ""
    })

    const inputs = [
        {
            id: 1,
            name: "hostname",
            type: "text",
            placeholder: "Host Name",
            label: "Host Name"
        },
        {
            id: 2,
            name: "eventname",
            type: "text",
            placeholder: "Event Name",
            label: "Event Name"
        },
        {
            id: 3,
            name: "dress",
            type: "text",
            placeholder: "Dress Code",
            label: "Dress Code"
        },
        {
            id: 4,
            name: "address",
            type: "text",
            placeholder: "Adress",
            label: "Address"
        },
        {
            id: 5,
            name: "suburb",
            type: "text",
            placeholder: "Suburb",
            label: "Suburb"
        },
        {
            id: 6,
            name: "postcode",
            type: "text",
            placeholder: "Postcode",
            label: "Postcode"
        },
        {
            id: 7,
            name: "startdate",
            type: "date",
            placeholder: "Date",
            label: "Date"
        },
        {
            id: 8,
            name: "time",
            type: "time",
            placeholder: "Time",
            label: "Time"
        },
    ]
    const [isFormVisible, setIsFormVisible] = useState(true)
    const [showNext, setShowNext] = useState(false)
    const [confetti, setConfetti] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setShowNext(true)
        setConfetti(true)
        form.clear()
    }

    const onChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value })
    }

    function handleNext() {
        setIsFormVisible(false)
        setShowNext(false)
        setConfetti(false)
    }

    

  return (
    <>
        <div className={isFormVisible ? 'form__content' : "hide__form"}>
            {
                confetti && <Confetti />
            }
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
            <div className='input__content'>
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
            </div>
            <button className={showNext ? "hide__event" : 'create__event__button'}>🥳 Create</button>
            <div className={showNext ? "sucessful__message__content" : "hide__event"}>
                <h2 className='gradient__text'>Congrats! You have created your event.</h2>
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