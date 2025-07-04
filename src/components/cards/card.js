import React from "react"
import {Link} from "gatsby"
// import Img from "gatsby-image"

const Card = ({cardImage, card}) => {
  const {
    title,
    description,
    buttonLabel,
    buttonUrl
  } = card

  return (
    <div className="card col-md-5 mb-3">      
      <img src={cardImage} alt={`${title}`} className="card-img" />
      <div className="card-body row">
        <div className="col-sm-8">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{description}</p>
        </div>
        <div className="col-xs-4">
          <Link className="card-link btn btn-secondary" to={buttonUrl}>{buttonLabel}</Link>
        </div>
      </div>
    </div>
  )
}

export default Card
