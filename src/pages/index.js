import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Bio from "../components/bio"
import SEO from "../components/seo"
import MainFeed from "../components/mainfeed"
import ContactCard from "../components/contactcard"

const IndexPage = () => (
  <Layout>
    <Bio></Bio>
    <MainFeed></MainFeed>
  </Layout>
)

export default IndexPage
