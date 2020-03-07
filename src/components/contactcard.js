import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const ContactCard = () => {
  return (
    <div className="contactcard--wrapper">

    <div className="contactcard--content">
      <a href="https://www.linkedin.com/in/jack-l-641496106/" target="_blank"  rel="noopener noreferrer" className="fa fa-brand fa-linkedin "><FontAwesomeIcon icon={faLinkedin} /></a>
      <a href="https://github.com/jbenett" target="_blank" rel="noopener noreferrer" className="fa fa-brand fa-github"><FontAwesomeIcon icon={faGithub} /></a>
    </div>
    </div>
  )
}

export default ContactCard
