import React from "react"

import Layout from "../components/templates/layoutWithTitle"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout title="404 - Página não encontrada">
    <SEO title="404: Não Encontrado" />
    <div className="mt-2 mb-5 pb-5">
      <p className="mb-5">O link está quebrado ou a página foi movida.</p>
    </div>
  </Layout>
)

export default NotFoundPage
