import { generate, reset, addToFavories } from "../../redux/reducer.js";
import store from "../../redux/store.js"

describe("redux", () => {
  it("store should have properties wallets and favorites", () => {
    const str = store.getState()

    expect(str.wallet).toHaveProperty("wallets");
    expect(str.wallet).toHaveProperty("favorites");
  });

  it("should add a wallet to the store", () => {
    const wallet = {
      walletId: "mock address",
      address: "",
      privateKey: "",
      mnemonic: "",
    };
    store.dispatch(generate(wallet))
    expect(store.getState().wallet.wallets[0].walletId).toBe("mock address")
  });
  it("should add a second wallet to the store", () => {
    const wallet = {
      walletId: "mock address 2",
      address: "",
      privateKey: "",
      mnemonic: "",
    };
    store.dispatch(generate(wallet))
    expect(store.getState().wallet.wallets.length).toBe(2)
  });

  // TODO
  //it("should add the first wallet to favorites", () => {})

  it("should reset the store", () => {
    store.dispatch(reset())

    expect(store.getState().wallet.wallets.length).toBe(0)
  });
});
