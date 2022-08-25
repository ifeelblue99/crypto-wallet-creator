import { ethers } from "ethers";
import generateId from "./generateId";

function generateWallet(walletCount) {
  const walletArr = [];
console.log("started to creating...")
  for (let indx = 0; indx < walletCount; indx++) {
    const wallet = ethers.Wallet.createRandom();
    const newWallet = {
      walletId: generateId(),
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: wallet.mnemonic.phrase,
    };
    walletArr.push(newWallet);
    console.log("index:",indx+1, "-" ,"wallet address:",newWallet.address)
  }

  return walletArr;
}

export default generateWallet;
