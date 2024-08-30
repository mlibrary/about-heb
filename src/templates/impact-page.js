import React from 'react'
import SEO from "../components/seo"
import Layout from '../components/layout'
import Title from '../components/title'
import {graphql} from 'gatsby'
import ReactMarkdown from "react-markdown";

const Impact = ({data}) => {
  const {
    title,
    readershipMapDescription,
    googleDataStudioDescription
  } = data.markdownRemark.frontmatter

  // When we have markdown in the frontmatter, we need to process it
  // with ReactMarkdown (or something) or something similar.
  // When it's in the "html"/not frontmatter, we would "dangerouslySetInnerHTML"

  return (
    <Layout>
      <SEO title={title} />
      <div className="container">
        <Title title={title} />
        <div className="readership-map">
          <ReactMarkdown source={readershipMapDescription} />
          <div className="readership-map-embed">
            <iframe title="ACLS HEB Readership Map" frameborder="0" height="650" width="100%" src="https://maps.publishing.umich.edu/readership-map/?filter.stream=4755115906"></iframe>
          </div>
        </div>
        <div className="google-data-studio">
          <ReactMarkdown source={googleDataStudioDescription} />
          <div className="embed-responsive embed-responsive-1by1">
            <iframe title="ACLS HEB Usage Report" className="embed-responsive-item" src="https://lookerstudio.google.com/embed/reporting/ffc10351-ef28-439f-a848-a31fb184f865/page/9LCE"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query impactPage($id: String!) {
  	markdownRemark(id: {eq: $id}) {
      frontmatter{
        title
        readershipMapDescription
        googleDataStudioDescription
      }
    }
  }
`

export default Impact
