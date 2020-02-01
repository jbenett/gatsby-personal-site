import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div
      style={{
        display: `flex`,
      }}
    >
      <Link to="#">&lt; Jack Lenzotti /&gt;</Link>
      <Link to="/page-2/">&lt; Blog /&gt;</Link>
      <Link to="/page-3/">&lt; My Favorites /&gt;</Link>
      <Link to="/contact/">&lt; Contact /&gt;</Link>
    </div>
  )
}

export default Navbar
