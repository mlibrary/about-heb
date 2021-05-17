import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

export const titleQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  quickLinks: allMarkdownRemark (
    filter: {
      frontmatter: { templateKey: { eq: "quick-link" } }
    },
    sort: {
      fields: frontmatter___order,
      order: ASC
    },
  ) {
    edges {
      node {
        frontmatter {
          title
          pageUrl
        }
      }
    }
  }
}
`

const Footer = () => {
    const data = useStaticQuery(titleQuery)
    const {title} = data.site.siteMetadata
    const quickLinks = data.quickLinks.edges
    const now = new Date()
    const year = now.getFullYear()

    return (
    <footer className="footer text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/" className="text-light mb-2 scala-sans"><img src="/assets/heb-red-4x.png" alt="ACLS Humanities Ebook" height="100" width="auto" className="block" /></a>
            <small className="text-light d-block">New York, NY</small>      
            <small className="d-block"><a className="text-light" href="/contact">Contact Us</a></small>      
            <p className="social">
              <a href="https://twitter.com/ACLS_HEB"><svg width="24px" height="24px" viewBox="0 0 24 24" className="social-link tw" aria-hidden="false"><title>Twitter</title><path d="M22,5.8a8.6,8.6,0,0,1-2.36.65,4.07,4.07,0,0,0,1.8-2.27,8.1,8.1,0,0,1-2.6,1A4.1,4.1,0,0,0,11.75,8a4.73,4.73,0,0,0,.09.93A11.6,11.6,0,0,1,3.39,4.62,4.2,4.2,0,0,0,2.83,6.7a4.09,4.09,0,0,0,1.82,3.4A4,4,0,0,1,2.8,9.6v0a4.11,4.11,0,0,0,3.29,4A4.2,4.2,0,0,1,5,13.81a4,4,0,0,1-.78-.07,4.14,4.14,0,0,0,3.83,2.85A8.22,8.22,0,0,1,3,18.34a6.37,6.37,0,0,1-1-.06,11.48,11.48,0,0,0,6.29,1.84A11.58,11.58,0,0,0,20,8.46c0-.18,0-.36,0-.53A8.31,8.31,0,0,0,22,5.8Z"></path></svg></a>
            </p>  
          </div>
          <div className="col-md-6 text-right">
            <ul>
              {
                quickLinks.map(({node}) => {
                  return (
                    <ol>
                      <a href={node.frontmatter.pageUrl} className="text-light">{node.frontmatter.title}</a>
                    </ol>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year} ACLS Humanities Ebook · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white scala-sans">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
