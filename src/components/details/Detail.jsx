import "./detail.css"

import React from 'react'

const Detail = ({icon, title, subtitle, selectIcon}) => {
  return (
    <div className="detail__content">
        <div className="detail__main__info">
            <div className="detail__main__icon">
                <span>{icon}</span>
            </div>
            <div className="detail__info">
                <h2 className="main__title">{title}</h2>
                <h2 className="subtitle">{subtitle}</h2>
            </div>
        </div>
        <div className="detail__select__icon">
            <img src={selectIcon}/>
        </div>
    </div>
  )
}

export default Detail