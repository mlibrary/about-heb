import React from 'react'
import Layout from '../components/layout'
import {graphql} from "gatsby"
import Img from "gatsby-image"

const Event = ({data}) => {
  const { html } = data.markdownRemark
  const { title, date, image } = data.markdownRemark.frontmatter
  var showImage;
  if (image) {
    showImage = <Img fluid={image.childImageSharp.fluid} />
  }

  return (
    <Layout>
      <div className="page-container container">
        <h1 className="mb-3">{title}</h1>
        {showImage}
        <h4 className="mt-4">{date}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
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

export default Event
