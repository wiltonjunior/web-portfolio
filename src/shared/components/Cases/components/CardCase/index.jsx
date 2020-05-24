import React from "react"

import Button from "@components/Button"

import "./styles.scss"

const CardCase = ({ item, active }) => {
  const { title, description, articles = [] } = item || {}
  return (
    <div className={`CardCase ${active ? "active" : ""}`}>
      <div className="card_body">
        <div className="column">
          <div className="card_image">
            <img src={item.image} />
          </div>
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
      <div className="card_footer">
        <Button basic href={item.link}>Acessar o Case</Button>
      </div>
    </div>
  )
}

export default CardCase
