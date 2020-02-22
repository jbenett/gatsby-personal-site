import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeed from "../components/blog"

const SecondPage = () => (
  <Layout>
    <SEO title="Blog" />
    <MainFeed></MainFeed>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
