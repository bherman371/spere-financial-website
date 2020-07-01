import React from "react"

import Layout from "../components/templates/layout"
import SEO from "../components/seo"

import HeroIndex from "../components/organisms/heroIndex"
import HeroTextPortfolio from "../components/organisms/heros/textPortfolio"
import HeroQuestions from "../components/organisms/heros/questions"
import HeroGeneric from "../components/organisms/heros/generic"
import HeroCallToAction from "../components/organisms/heros/callToAction"

const IndexPage = () => (
  <Layout fluid={true}>
    <SEO title="Home" />

    <HeroIndex />
    <HeroTextPortfolio />
    <HeroQuestions />
  </Layout>
)

export default IndexPage
