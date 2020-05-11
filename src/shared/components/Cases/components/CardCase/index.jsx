import React from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import "./styles.scss"

const CardCase = () => {
  const item = {
    title: "Cases",
    shadow: "Portfolio",
    description: "Navegue em meus tralhos."
  }
  return (
    <div className="Cases">
      <Container>
        <div className="cases_main">
        <Section item={item} />
        </div>
      </Container>
    </div>
  )
}

export default CardCase
