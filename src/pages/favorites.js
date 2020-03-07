import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeed from "../components/favorites"

const ThirdPage = () => (
  <Layout>
    <SEO title="Favorites" />
    <MainFeed></MainFeed>
  </Layout>
)

export default ThirdPage
