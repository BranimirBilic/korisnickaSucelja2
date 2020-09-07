import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
//import { rhythm ,scale} from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        
      />
      <article>
        <header>
          <h1
            style={{
              //marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            <span style = {{color:"#f58233"}}>
            {post.frontmatter.title}</span>
          </h1>
          <p
            style={{
              //...scale(-1 / 5),
              display: `block`,
              //marginBottom: rhythm(1),
            }}
          >
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            //marginBottom: rhythm(1),
          }}
        />
        <footer>
         
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
