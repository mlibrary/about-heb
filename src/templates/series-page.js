import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Series = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <SEO title={title} />
      <div className="container page-container">
        <Title title={title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query seriesPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      html
      frontmatter{
        title
      }
    }
  }
`

export default Series
