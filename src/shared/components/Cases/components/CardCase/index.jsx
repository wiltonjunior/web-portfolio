import React from "react"

import "./styles.scss"

const CardCase = ({ item }) => {
  const { title, description, articles = [] } = item || {}
  return (
    <div className="CardCase">
      <div className="column">
        <div className="card_image"></div>
      </div>
      <div className="column">
        <div className="card_description">
          <div className="header">
            <h1 className="title">{title}</h1>
            <p className="description">{description}</p>
          </div>
          <div className="colunm-body">
            {articles.map((item, index) => (
              <p key={index} className="article">
                {item.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCase
