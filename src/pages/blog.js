import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeed from "../components/blog"

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <MainFeed></MainFeed>
  </Layout>
)

export default SecondPage
