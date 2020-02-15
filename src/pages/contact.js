import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MainFeed from "../components/contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Me" />
    <MainFeed></MainFeed>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)
export default ContactPage
