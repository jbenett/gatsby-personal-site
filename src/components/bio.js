import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className="bio">
      <div className="bio--content">
        <h1>Hello World, I'm Jack Lenzotti</h1>
        <p>
          I'm a full stack developer who lives and works Ohio, trying his best to build cool stuff.
        </p>
      </div>
    </div>
  )
}

export default Bio
