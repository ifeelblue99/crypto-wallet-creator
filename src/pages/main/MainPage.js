import "./styles.css";
import { ethers } from "ethers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import generateId from "../../utils/generateId.js";
import Loader from "../../components/loader/Loader";
import { useDispatch } from "react-redux";
import Range from "../../components/range-bar/Range";
import { generate, reset } from "../../redux/reducer";
import generateWallet from "../../utils/generateWallet";
import SecondaryButton from "../../components/button/secondary/SecondaryButton";

function MainPage() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [walletCount, setWalletCount] = useState(2);
  const [showLoader, setShowLoader] = useState(false);
  // const [buttonMsg, setButtonMsg] = useState("Generate");

  function handleChange(e) {
    setWalletCount(e.target.value);
  }

  function handleSubmit() {
    dispatch(reset());
    //setShowLoader(true);
    // setButtonMsg("Loading...");

    const walletArr = generateWallet(walletCount);
    walletArr.forEach((el) => {
      dispatch(generate(el))
    });
    //setShowLoader(false);

    // setButtonMsg("Generate");
    nav(`/wallets/${walletCount}`);
  }

  return (
    <div className="main-page">
       {showLoader && (
        <Loader
          message={
            "Generating " +
            walletCount +
            " wallet" +
            (walletCount > 1 ? "s" : "")
          }
        />
      )} 
      <Range
        min="1"
        max="50"
        name="range"
        rangeValue={walletCount}
        setRangeValue={handleChange}
      />
      <SecondaryButton message={"Generate"/*buttonMsg*/} click={handleSubmit} />
      <span id="loader-error-mesage">I've not added a loder animation <strong>YET.</strong> Please press F12 to see <strong>console</strong> logs.</span>
    </div>
  );
}

export default MainPage;
