import React from 'react'
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'

const Authors = ({data}) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html
  return (
    <Layout>
      <div className="container page-container">
        <Title title={title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query authorsPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      html
      frontmatter{
        title
      }
    }
  }
`

export default Authors