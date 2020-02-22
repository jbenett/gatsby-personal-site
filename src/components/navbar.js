import React, { useState, useEffect } from "react"
import { Link } from "gatsby"



const Navbar = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const top = window.scrollY < 300;
      console.log(isTop);
      if (top !== true) {
        setIsTop(false);
      }
      else{
        setIsTop(true);
      }
    });
  }, []);

  const handleScrollChange = () => {
    setIsTop();
  }

  return (
    <div
      style={{
        display: `flex`,
      }}
      className = {isTop ? "navbar" : "navbar--hidden"}
    >
      <Link to="#" className="nav--link">&lt; Jack Lenzotti /&gt;</Link>
      <Link to="/page-2/" className="nav--link">&lt; Blog /&gt;</Link>
      <Link to="/page-3/" className="nav--link">&lt; My Favorites /&gt;</Link>
      <Link to="/contact/" className="nav--link">&lt; Contact /&gt;</Link>
      <div className="hamburger--wrapper">
      <div>
        {/* Load an icon library to show a hamburger menu (bars) on small screens */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        {/* Top Navigation Menu */}
        <div className="topnav">
          {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars" />
          </a>
          {/* Navigation links (hidden by default) */}
          <div id="myLinks">
            <Link to="/#/" className="nav--link">&lt; Home /&gt;</Link>
            <Link to="/page-2/" className="nav--link">&lt; Blog /&gt;</Link>
            <Link to="/page-3/" className="nav--link">&lt; My Favorites /&gt;</Link>
            <Link to="/contact/" className="nav--link">&lt; Contact /&gt;</Link>
          </div>
        </div>
        </div>
        <p> &lt; Jack Lenzotti /&gt;</p>
      </div>
    </div>
  )
}

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

export default Navbar
