import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/templates/layoutWithTitle"
import SEO from "../components/seo"

import HeroContact from "../components/organisms/heros/contact"

const IndexPage = ({ data }) => (
  <Layout title="" fluid>
    <SEO title="Contact Us" />

    <HeroContact />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    equipe: allEquipeYaml {
      nodes {
        name
        description
        linkedin
      }
    }
  }
`
