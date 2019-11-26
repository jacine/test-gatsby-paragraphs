import React from "react"
import { Link } from "gatsby"
import "./nav.scss"

const Nav = () => {
  // @todo: Make this use the real main menu, when this issue is resolved.
  // https://www.drupal.org/project/drupal/issues/2915792
  // @see More details at:
  // https://spectrum.chat/gatsby-wg-drupal/general/accessing-drupal-menus-with-gatsby-and-graphql~a9f40994-db68-423d-a8fd-e5e265ddfae1
  return (
    <nav role="navigation">
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hello">Hello</Link>
        </li>
        <li>
          <Link to="/get-started">Get Started</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/faq">FAQs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav

// Note: allMenuLinkContentMenuLinkContent is not available yet.
// https://www.drupal.org/project/drupal/issues/2915792
//
// export const query = graphql`
//   query {
//     allMenuLinkContentMenuLinkContent(sort: {fields: [weight], order: ASC}, filter: {menu_name: {eq: "main-menu"}}) {
//       edges {
//         node {
//           id
//           drupal_id
//           title
//           link {
//             uri
//             title
//           }
//           drupal_parent_menu_item
//         }
//       }
//     }
//   }
// `
