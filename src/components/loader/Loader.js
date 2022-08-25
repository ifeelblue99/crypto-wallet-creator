import "./styles.css"
import React from 'react'

function Loader({message}) {
  return (
    <div id='loader'>
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <span>{message}</span>
    </div>
  )
}

export default Loader