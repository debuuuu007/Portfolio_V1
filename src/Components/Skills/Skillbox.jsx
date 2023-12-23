import "./Skills.css"
import React from 'react'

function Skillbox({ image }) {
  return (
    <div className="mainbox">
      <div className="box">
        <img src={image} alt="Photo" />
      </div>
    </div>
  )
}

export default Skillbox