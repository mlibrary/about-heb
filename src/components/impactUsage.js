import React from "react"
import Img from "gatsby-image"

const ImpactUsage = ({impactUsage}) => {
  return (
    <div>
    <h2>{impactUsage.heading}</h2>
    <a href="/impact">
      <figure><Img fluid={impactUsage.image.childImageSharp.fluid} alt="map" className="map-image"/></figure>
      <p>{impactUsage.description}</p>
      <p>{impactUsage.totalBooks}</p>
      <p>{impactUsage.totalViews}</p>
    </a>
    </div>
  )
}

export default ImpactUsage
