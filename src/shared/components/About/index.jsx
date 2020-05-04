import React from "react"

import Container from "@components/Container"

import Section from "@components/Section"

import "./styles.scss"

const About = () => {
  const item = {
    title: "Sobre mim",
    shadow: "Sobre"
  }
  return (
    <div className="About">
      <Container>
        <Section item={item} />
        <div className="about_main"></div>
      </Container>
    </div>
  )
}

export default About
