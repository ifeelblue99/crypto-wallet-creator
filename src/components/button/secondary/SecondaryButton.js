import "./styles.css"
import React from 'react'


function SecondaryButton({message, click}) {
  return (
    <button className="secondary-btn" onClick={click} >{message}</button>
  )

}

export default SecondaryButton