import React, {useState} from "react"
import {Link} from "gatsby"
// import Img from 'gatsby-image'

//export const getLogo = graphql`
//{
//  logo:file(relativePath:{eq: "LeverLogo.svg"}) {
//    childImageSharp{
//      fluid(maxWidth: 700){
//        ...GatsbyImageSharpFluid
//      }
//    }
//  }
//}
// `

const Navbar = () => {
  const [isOpen, setNav] = (useState(false))
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="/assets/heb-red-4x.png" alt="" height="70" width="auto" className="navbar-brand-logo"/> <h1>ACLS Humanities EBook</h1>
        </a> 
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbar" className={
          isOpen
            ? "collapse navbar-collapse flex-row show"
            : "collapse navbar-collapse flex-row-reverse"
          }
        >
          <ul className="navbar-nav float-right">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li>
              <a href="https://www.fulcrum.org/heb" className="nav-link text-dark">
                Books
              </a>
            </li>
            <li>
              <Link to="/impact" className="nav-link text-dark">
                Impact
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-dark">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/librarians" className="nav-link text-dark">
                Librarians
              </Link>
            </li>
            <li>
              <Link to="/publishers" className="nav-link text-dark">
                Publishers
              </Link>
            </li>
            <li>
              <Link to="/societies" className="nav-link text-dark">
                Societies
              </Link>
            </li>
            <li>
              <Link to="/collection" className="nav-link text-dark">
                Collection
              </Link>
            </li>
            <li>
              <Link to="/help" className="nav-link text-dark">
                Help
              </Link>
            </li>
            <li>
              <Link to="/faqs" className="nav-link text-dark">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
