
import MainPage from "../../pages/main/MainPage";
import FourOFour from "../../pages/404/FourOFour";
import WalletsPage from "../../pages/wallets/WalletsPage";

import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'
import {render, screen} from '@testing-library/react'



describe("pages", () => {
    it("shoul render Main page", async () => {
        render(<MainPage />, {wrapper: BrowserRouter})
        const user = userEvent.setup()

        expect(screen.getByText(/Generate/i)).toBeInTheDocument()
        await user.click(screen.getByText("Generate"))

        expect(screen.getByText(/wallets/i)).toBeInTheDocument()
    })
})