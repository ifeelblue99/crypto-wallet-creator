import "./styles.css"
import React from 'react'


function PrimaryButton({message, click}) {
  return (
    <button className="primary-btn" onClick={click} >{message}</button>
  )

}

export default PrimaryButton