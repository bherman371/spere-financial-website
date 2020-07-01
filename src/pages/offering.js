import React from "react"

import Layout from "../components/templates/layoutWithTitle"
import SEO from "../components/seo"

import HeroIndex from "../components/organisms/heroIndex"
import HeroTextPortfolio from "../components/organisms/heros/textPortfolio"
import HeroQuestions from "../components/organisms/heros/questionsFullSize"
import HeroOverview from "../components/organisms/heros/overview"
import HeroCallToAction from "../components/organisms/heros/callToAction"

const IndexPage = () => (
  <Layout fluid={true} title="Current Offering">
    <SEO title="Current Offering" />

    <HeroOverview />
    <HeroQuestions />
    <HeroCallToAction />
  </Layout>
)

export default IndexPage
