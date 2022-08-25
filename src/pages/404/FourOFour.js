import "./styles.css"
import React from 'react'
import PrimaryButton from '../../components/button/primary/PrimaryButton'
import {useNavigate} from "react-router-dom"

function FourOFour() {
    const nav = useNavigate()
  return (
    <div className="fourofour-page">
        <div>
            <span>Ooops!</span> <br />
            <span>404</span>
        </div>
        <PrimaryButton click={()=>nav("/")} message="Home" />
    </div>
  )
}

export default FourOFour