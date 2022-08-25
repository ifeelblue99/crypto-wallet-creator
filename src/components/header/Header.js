import { useEffect, useState } from "react";
import "./styles.css";

function Header({ title, link, linkName }) {
  const [showHomeBtn, setShowHomeBtn] = useState("hidden")

  useEffect(()=> {
    console.log(showHomeBtn)
    const tabUrl = window.location.pathname
    if(/walelts/gi.test(tabUrl)) {
      return setShowHomeBtn("visible")
    }
    setShowHomeBtn("hidden")  
  },[])


  return (
    <header data-testid="header" id="header">
      <h3>{title}</h3>
      <div>
        <button style={{visibility:showHomeBtn}} id="go-home-button">Home</button>
        <a href={link}>{linkName}</a>
      </div>
    </header>
  );
}

export default Header;
