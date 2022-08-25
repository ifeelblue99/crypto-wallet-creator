import "./styles.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Wallet from "../../components/wallet/Wallet";
import { useSelector, useDispatch } from "react-redux";
import DashBoard from "../../components/dashboard/DashBoard";
import { reset, addToFavories } from "../../redux/reducer.js";

function WalletsPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  const walletCount = window.location.pathname.split("/")[2];
  const wallets = useSelector((state) => state.wallet.wallets);
  
  const [selectedWallet, setSelectedWallet] = useState({...wallets[0], index:1})

  useEffect(() => {
    if (isNaN(walletCount) || walletCount < 1 || walletCount > 50) {
      dispatch(reset());
      return nav("/");
    }
    if (wallets.length === 0) {
      return nav("/");
    }
  });

  return (
    <div className="wallets-page">

      <h2>Wallets ({walletCount})</h2>

      <div className="wallet-holder">
        {wallets.map((el, indx) => (
          <Wallet
          click={()=> {
            setSelectedWallet({...el, index:indx+1})
            window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
          }}
            index={indx+1}
            key={el.walletId}
            address={el.address}
            walletId={el.walletId}
          />
        ))}
      </div>
          <DashBoard {...selectedWallet} />
    </div>
  );
}

export default WalletsPage;
