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
        <div className="row justify-content-between">
          <section className="col-md-2">
            <a href="/" className="text-light"><img src="/assets/HEB-RED-NOBG.svg" alt="ACLS Humanities Ebook" height="100" width="auto" className="block" /></a>
            <small className="d-block pt-2"><a className="text-light" href="/contact">Contact Us</a></small>      
          </section>
          <section className="col-md-3 partners">
            <div>
              <a className="pr-5" href="https://acls.org"><img src="/assets/acls-logo.png" alt="ACLS" /></a>
              <a href="https://www.publishing.umich.edu"><img src="/assets/mpub-logo-white.png" alt="Michigan Publishing"/></a>
            </div> 
            <div>
              <p className="text-light proxima-nova pt-4">ACLS HEB is a partnership between ACLS and Michigan Publishing</p>
            </div>           
          </section>
          <section className="col-md-2">
            <h2 className="text-light">ACLS HEB</h2>
              <ul className="list-unstyled">
                <li><a className="text-light" href="https://fulcrum.org/heb">Browse and Search</a></li>
                <li><a className="text-light" href="/about">About ACLS HEB</a></li>
                <li><a className="text-light" href="/impact">Impact and Usage</a></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Information For</h2>
              <ul className="list-unstyled">
                <li><a className="text-light" href="/librarians">Librarians</a></li>
                <li><a className="text-light" href="/publishers">Publishers</a></li>
                <li><a className="text-light" href="/societies">Societies</a></li>
              </ul>
          </section>
          <section className="col-md-2">
            <h2 className="text-light">Quicklinks</h2>
            <ul className="list-unstyled">
              {
                quickLinks.map(({node}) => {
                  return (
                    <li key={node.id}>
                      <a href={node.frontmatter.pageUrl} className="text-light">{node.frontmatter.title}</a>
                    </li>
                  )
                })
              }
            </ul>
          </section>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
          <small className="text-light d-block mb-3">© {year} ACLS Humanities Ebook · <a className="text-light" href="https://fulcrum.org/accessibility/">Accessibility</a> · <a className="text-light" href="https://fulcrum.org/preservation">Preservation</a> · <a className="text-light" href="https://fulcrum.org/privacy">Privacy</a> · <a className="text-light" href="/terms">Terms of Service</a></small>    
          </div>
          <div className="col-md-6 text-right">
            <small className="text-white">Powered by</small> <a href="https://fulcrum.org/"><img className="fulcrum" src="/assets/fulcrum-full-white.svg" alt="Fulcrum logo" height="20" width="auto" /></a>
          </div>
        </div>
      </div>  
    </footer>
  )
}

export default Footer
