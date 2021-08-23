import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import PostList from "../components/PostList"
import Layout from "../components/layout"

const Index = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout>
      <SEO />
      <section className="section">
        <p>
          I’m Adam Jahnke. I am currently building things at{" "}
          <a href="https://jeli.io">Jeli</a>. I live in Springfield, Missouri
          with my wonderful wife{" "}
          <a
            title="oliviayonk on Twitter"
            href="https://twitter.com/oliviayonk"
          >
            Olivia
          </a>
          . We <a href="https://jahnke.blog">write</a> together occasionally.
        </p>
        <h2>Recent Posts:</h2>
        <PostList posts={posts} />
      </section>
    </Layout>
  )
}
Index.displayName = "Index"
export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { templateKey: { eq: "post" }, published: { eq: true } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          fileAbsolutePath
          frontmatter {
            date
            path
            tags
            title
          }
        }
      }
    }
  }
`
