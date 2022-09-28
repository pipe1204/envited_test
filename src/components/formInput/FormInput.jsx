import "./formInput.css"

const FormInput = ({label, onchange, id, ...inputs}) => {
  return (
    <div className="form__input">
        <label>{label}</label>
        <input {...inputs} onChange={onchange}/>
    </div>
  )
}

export default FormInput