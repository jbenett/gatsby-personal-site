import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeed from "../components/favorites"

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <MainFeed></MainFeed>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
