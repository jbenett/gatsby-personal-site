import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'



const Navbar = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 400;
      console.log(isTop);
      if (top !== true) {
        setIsTop(false);
      }
      else{
        setIsTop(true);
      }
    });
  }, []);

  return (
    <div
      style={{
        display: `flex`,
      }}
      className = {isTop ? "navbar" : "navbar--hidden"}
    >
      <div className="navbar--desktop">
        <Link to="#" className="nav--link">&lt; Jack Lenzotti /&gt;</Link>
        <Link to="/blog/" className="nav--link">&lt; Blog /&gt;</Link>
        <Link to="/favorites/" className="nav--link">&lt; My Favorites /&gt;</Link>
        <Link to="/contact/" className="nav--link">&lt; Contact /&gt;</Link>
      </div>
      <div className="navbar--mobile">
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <FontAwesomeIcon className="fa" icon={faBars} />
          </a>
          <div id="myLinks">
            <Link to="/#/" className="nav--link">&lt; Home /&gt;</Link>
            <Link to="/blog/" className="nav--link">&lt; Blog /&gt;</Link>
            <Link to="/favorites/" className="nav--link">&lt; My Favorites /&gt;</Link>
            <Link to="/contact/" className="nav--link">&lt; Contact /&gt;</Link>
          </div>
        </div>
    </div>
  )
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.position = "absolute";
    x.style.top = "64px";
    x.style.right = "0px";
  }
}

export default Navbar
