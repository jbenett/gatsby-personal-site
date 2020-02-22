import React from "react"

import Layout from "../components/layout"
import Bio from "../components/bio"
import SEO from "../components/seo"
import MainFeed from "../components/mainfeed"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Bio></Bio>
    <MainFeed></MainFeed>
  </Layout>
)

export default IndexPage
