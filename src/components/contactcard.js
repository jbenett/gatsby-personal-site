import React from "react"
import { Link } from "gatsby"

const ContactCard = () => {
  return (
    <div className="contactcard--wrapper">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div className="contactcard--content">
      <a href="https://www.linkedin.com/in/jack-l-641496106/" target="_blank" className="fa fa-linkedin"></a>
      <a href="https://github.com/jbenett" target="_blank" className="fa fa-github"></a>
      <a href="#" className="fa fa-instagram"></a>
      <a href="#" className="fa fa-snapchat-ghost"></a>
    </div>
    </div>
  )
}

export default ContactCard
