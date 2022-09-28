import { useState } from 'react';
import Typewriter from 'typewriter-effect';
import FormInput from '../../components/formInput/FormInput'
import "./create.css"
import { Link } from 'react-router-dom';

const Create = () => {

    const [eventDetails, setEventDetails] = useState({
        eventName: "",
        hostName: "",
        place: "",
        startDate: "",
        endDate: "",
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

    function handleSubmit(e) {
        e.preventDefault()
    }

    const onChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value })
    }

    console.log(eventDetails)

  return (
    <div className='form__content'>
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
        </form>
        <Link to="/events"><button className='create__event__button'>🥳 Next</button></Link>
    </div>
  )
}

export default Create