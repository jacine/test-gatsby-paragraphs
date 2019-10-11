import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Title from "../components/title/title"
import Container from "../components/container/container"

const Blogs = ({ data }) => (
  <Layout className="section-blog page-blog">
    <SEO title="Insights from our Team" />
    <Title title="Blog" />
    <Container constrained={true}>
      <ul className="listing">
        {data.article.edges.map(({ node }) => (
          <li className="listing__item">
            <h2>
              <Link to={`/${node.fields.slug}`} key={node.id}>
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
