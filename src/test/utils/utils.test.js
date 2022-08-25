import generateId from "../../utils/generateId";
import generateWallet from "../../utils/generateWallet";

describe("utils", () => {
    describe("generateId()", () => {
        it("should generate a random four digitednumber", () => {
            const number = generateId()
            expect(number).toBeGreaterThan(999)
        })
        it("should generate three random numbers after one another", () => {
            const num1 = generateId()
            const num2 = generateId()
            const num3 = generateId()
            
            expect(num3).toEqual(num2+1)
            expect(num3).toEqual(num1+2)
        })
    })

    describe("generateWallet(count: number)", () => {
        it("should generate a comoplete eth wallet which has address, privateKey and mnemonic", () => {
            const wallet = generateWallet(1)[0]

            expect(wallet).toHaveProperty("address")
            expect(wallet).toHaveProperty("privateKey")
            expect(wallet).toHaveProperty("mnemonic")
        })
        it("should generate three eth wallets", () => {
            const wallets = generateWallet(3)

            expect(wallets).toHaveLength(3)
        })
    })
})