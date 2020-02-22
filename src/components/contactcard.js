import React from "react"
import { Link } from "gatsby"
import Image from "./image.js"

const ContactCard = () => {
  return (
    <div className="contactcard--wrapper">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div className="contactcard--content">
      <a href="#" className="fa fa-linkedin"></a>
      <a href="#" className="fa fa-github"></a>
      <a href="#" class="fa fa-instagram"></a>
      <a href="#" class="fa fa-snapchat-ghost"></a>
    </div>
    </div>
  )
}

export default ContactCard
