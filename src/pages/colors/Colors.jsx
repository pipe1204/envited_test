import "./colors.css"
import React from 'react'
import Palete from "../../components/palete/Palete"

const Colors = () => {
  return (
    <div>
        <Palete 
            title="Primary Palette"
            important="Important text, buttons, gradients"
            subtitle=""
            color1="#240D57"
            code1="240D57"
            color2="#501FC1"
            code2="501FC1"
            color3="#8456EC"
            code3="8456EC"
            color4="#E87BF8"
            code4="E87BF8"
        />
        <Palete 
            title="Secondary Palette"
            important=""
            subtitle="Secondary Purples"
            color1="#CCB6FF"
            code1="CCB6FF"
            color2="#EDE5FF"
            code2="EDE5FF"
            color3="#F6F2FF"
            code3="F6F2FF"
        />
        <Palete 
            title=""
            important=""
            subtitle="Alert Colors"
            color1="#CCB6FF"
            code1="CCB6FF"
            color2="#EDE5FF"
            code2="EDE5FF"
            color3="#F6F2FF"
            code3="F6F2FF"
        />
    </div>
  )
}

export default Colors