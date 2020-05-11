import React from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import CardCase from "./components/CardCase"

import "./styles.scss"

const Case = () => {
  const item = {
    title: "Cases",
    shadow: "Portfolio",
    description: "Navegue em meus tralhos.",
  }
  return (
    <div className="Cases">
      <Container>
        <div className="cases_main">
          <Section item={item} />
        </div>
        <CardCase />
      </Container>
    </div>
  )
}

export default Case
