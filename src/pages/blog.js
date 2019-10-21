import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout/layout"
import Title from "../components/title/title"
import Container from "../components/container/container"

const Blogs = ({ data }) => (
  <Layout className="section-blog page-blog">
    <SEO title="Insights from our Team" />
    <Title title="Blog" />
    <Container constrained={true}>
      <ul className="listing">
        {data.article.edges.map(({ node }) => (
          <li key={node.id} className="listing__item">
            <h2>
              <Link to={`/${node.fields.slug}`}>
                {node.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
)

export default Blogs

export const query = graphql`
  query {
    article: allNodeArticle(limit: 100) {
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
