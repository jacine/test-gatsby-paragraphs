import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import PageTitle from "../components/pageTitle/pageTitle"

const Faqs = ({ data }) => (
  <Layout className="section-blog page-blog">
    <SEO title="Insights from our Team" />
    <PageTitle title="Blog" />
    <ul>
      {data.article.edges.map(({ node }) => (
        <Link to={`/${node.fields.slug}`} key={node.id}>
          <h2>{node.title}</h2>
        </Link>
      ))}
    </ul>
  </Layout>
)

export default Faqs

export const query = graphql`
  query {
    article: allNodeArticle(limit: 1000) {
      edges {
        node {
          id
          title
          drupal_id
          fields {
            slug
          }
        }
      }
    }
  }
`
