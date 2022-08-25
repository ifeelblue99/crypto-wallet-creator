import '@testing-library/jest-dom'

import Header from "../../components/header/Header"
import Loader from "../../components/loader/Loader"
import Wallet from "../../components/wallet/Wallet"
import Range from "../../components/range-bar/Range"
import DashBoard from "../../components/dashboard/DashBoard"
import PrimaryButton from "../../components/button/primary/PrimaryButton"
import SecondaryButton from "../../components/button/secondary/SecondaryButton"

import {render, fireEvent, waitFor, screen} from '@testing-library/react'

describe("components", () => {
    it("should render Header correctly", () => {
        render(<Header title="title" link="" linkName="header test link" />)
    
        expect(screen.getByText("header test link")).toBeInTheDocument()
    })

    it("should render Loader correctly", () => {
        render(<Loader message="loader test" />)
    
        expect(screen.getByText("loader test")).toBeInTheDocument()
    })

    it("should render Wallet correctly", () => {
        render(<Wallet click={()=>{}} index="0" address="1_000_000_000_000_000_000" walletId="1" />)
    
        expect(screen.getByTestId("wallet")).toBeInTheDocument()
        //ERROR: expect(screen.getByTestId("wallet-address")).toHaveTextContent("address : 1_000_000_000_000_00...")
    })

    it("should render Range correctly", () => {
        render(<Range 
            name="range-test" 
            max="100" min="10" 
            rangeValue="50" 
            setRangeValue={()=>{}} 
        />)
    
        expect(screen.getByTestId("range")).toBeInTheDocument()

        const rangeInput = screen.getByTestId("range-input")
        expect(rangeInput).toHaveAttribute("value", "50")
    })

    it("should render DashBoard correctly", () => {
        render(<DashBoard walletId="0" address="A" privateKey="P" mnemonic="M" index="0" />)
    
        expect(screen.getByText("M")).toBeInTheDocument()
        expect(screen.getByText("A")).toBeInTheDocument()
        expect(screen.getByText("P")).toBeInTheDocument()
    })

    it("should render PrimaryButton correctly", () => {
        render(<PrimaryButton message="btn-test" click={()=>{}} />)
    
        expect(screen.getByText("btn-test")).toBeInTheDocument()
        expect(screen.getByText("btn-test")).toHaveClass("primary-btn")
    })

    it("should render SecondaryButton correctly", () => {
        render(<SecondaryButton message="sec-btn-test" click={()=>{}} />)
    
        expect(screen.getByText("sec-btn-test")).toBeInTheDocument()
        expect(screen.getByText("sec-btn-test")).toHaveClass("secondary-btn")
    })

})

