import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import NewsList from "../components/news/newsList"

const News = ({data}) => {
  const news = data.allMarkdownRemark.edges

  return (
    <Layout>
      <div className="container page-container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <NewsList news={news} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "news" } }
    },
    sort: {
      fields: frontmatter___date,
      order: DESC
    }
  ) {
    edges {
      node {
        id
        fields{
          slug
        }
        html
        frontmatter {
          title
          summary
          date(formatString:"MMMM Do, YYYY")
          image{
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`

export default News
