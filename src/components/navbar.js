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
            <li>
              <Link to="/collection" className="nav-link text-dark">
                The Collection
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-dark">
                About
              </Link>
            </li>
            <li>
              <Link to="/librarians" className="nav-link text-dark">
                For Librarians
              </Link>
            </li>
            <li>
              <Link to="/publishers" className="nav-link text-dark">
                For Publishers
              </Link>
            </li>
            <li>
              <Link to="/societies" className="nav-link text-dark">
                For Societies
              </Link>
            </li>
            <li>
              <Link to="/impact" className="nav-link text-dark">
                Impact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
