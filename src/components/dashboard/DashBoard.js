import "./styles.css"
import React from 'react'

function DashBoard({walletId, address, privateKey, mnemonic, index}) {
  return (
    <div className="dashboard">
      <h3>Selected Wallet ({index || 0})</h3>
      <div>
        <span>id</span>
        <span>{walletId}</span>
      </div>
      <div>
        <span>address</span>
        <span>{address}</span>
      </div>
      <div>
        <span>privateKey</span>
        <span>{privateKey}</span>
      </div>
      <div>
        <span>mnemonic</span>
        <span>{mnemonic}</span>
      </div>
    </div>
  )
}

export default DashBoard