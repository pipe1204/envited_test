import React from 'react'
import "./palete.css"
import Color from "../color/Color"

const Palete = ({title, important, subtitle, color1, code1, color2, code2, color3, code3, color4, code4}) => {
  return (
    <div className='palete__content'>
        <div className='palete__info'>
            <h2>{title}</h2>
            {
                important && 
                <ul>
                    <li>{important}</li>
                </ul>
            }
            <h2 className='subtitle'>{subtitle}</h2>
        </div>
        <div className='palete__colors__content'>
            <Color 
                color={color1}
                code={code1}
            />
            <Color 
                color={color2}
                code={code2}
            />
            <Color 
                color={color3}
                code={code3}
            />
            <Color 
                color={color4}
                code={code4}
            />
        </div>
    </div>
  )
}

export default Palete