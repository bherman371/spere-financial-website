import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/templates/layoutWithTitle"
import SEO from "../components/seo"

import HeroAbout from "../components/organisms/heros/about"

const IndexPage = ({ data }) => (
  <Layout title="" fluid>
    <SEO title="About Spere Financial" />

    <HeroAbout />

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
