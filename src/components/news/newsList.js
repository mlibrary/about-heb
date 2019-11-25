import React from "react"
import NewsCard from "./newsCard"

const NewsList = ({news, cardStyle}) => {
  return (
    <section className="lever-card-list">
      <h2>News</h2>
    {
      news.map(({node}) => {
        return <NewsCard key={node.id} singleNews={node} cardStyle={cardStyle}/>
      })
    }
    </section>
  )
}

export default NewsList
