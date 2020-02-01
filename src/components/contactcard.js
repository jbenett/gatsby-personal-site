import React from "react"
import { Link } from "gatsby"
import Image from "./image.js"

const ContactCard = () => {
  return (
    <div className="contactcard--wrapper">
      <div className="contactcard--content">
        <a href="https://placeholder.com"><img src="https://via.placeholder.com/100x120"></img></a>
        <div className="contactcard--text">
          <h2>A bit more about me</h2>
          <p>Age: 22</p>
          <p>Address: http://localhost:8000/</p>
          <p>Definitely not a designer</p>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
