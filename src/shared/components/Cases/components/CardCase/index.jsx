import React from "react"

import Button from "@components/Button"
import Translate from "@components/Translate"

import "./styles.scss"

const CardCase = ({ item, active }) => {
  const { title, description, articles = [] } = item || {}
  return (
    <div className={`CardCase ${active ? "active" : ""}`}>
      <div className="card_body">
        <div className="column">
          <div className="card_image">
            <img src={item.image} alt="image" />
          </div>
        </div>
        <div className="column">
          <div className="card_description">
            <div className="header">
              <h1 className="title">
                <Translate>{title}</Translate>
              </h1>
              <p className="description">
                <Translate>{description}</Translate>
              </p>
            </div>
            <div className="colunm-body">
              {articles.map((item, index) => (
                <p key={index} className="article">
                  <Translate>{item.description}</Translate>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <Button basic href={item.link}>
          ACESS_CASE
        </Button>
      </div>
    </div>
  )
}

export default CardCase
