import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import {graphql} from "gatsby"
import Img from "gatsby-image"

const News = ({data}) => {
  const { html } = data.markdownRemark
  const { title, summary, date, image } = data.markdownRemark.frontmatter
  var showImage;
  if (image) {
    showImage = <Img fluid={image.childImageSharp.fluid} />
  }

  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <div className="row justify-content-md-center">
          <div className="col-md-10">
            <h1 className="mb-3">{title}</h1>
            <div className="summary">
              <p>{summary}</p>
              <h4 className="mt-4">{date}</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-10 post-image">
            {showImage}
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      summary
      date(formatString: "MMMM Do, YYYY")
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`

export default News
