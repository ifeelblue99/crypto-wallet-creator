import "./styles.css"
import React from 'react'

function Wallet({click, index, address, walletId}) {
    address = address.substring(0, 20)+"..."
  return (
    <div data-testid="wallet" onClick={click} className="wallet-stick">
        <span className="wallet-value-span">
            <span className="wallet-info-span">
                id : {" "}
            </span>{walletId}
        </span>
        <span className="wallet-value-span">
            <span className="wallet-info-span">
                index : {" "}
            </span>{index}
        </span>
        <span style={{marginTop: "13px"}} className="wallet-value-span">
            <span data-testid="wallet-address" className="wallet-info-span">
                address : {" "}
            </span>{address}
        </span>
    </div>
  )
}

export default Wallet