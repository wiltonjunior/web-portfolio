import React from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import user from "@images/user.jpeg"

import "./styles.scss"

const About = () => {
  const item = {
    title: "Sobre mim",
    shadow: "Sobre",
    description: "Conheça um pouco da minha historia."
  }
  return (
    <div className="About">
      <Container>
        <Section item={item} />
        <div className="about_main">
          <div className="column">
            <div className="header">
              <div className="article">
                <h2>Academia</h2>
                <p>
                  Graduado em Ciência da computação pela Univesidade Estado do Rio Grandede do Norte - UERN.
                </p>
              </div>
              <div className="article">
                <h2>Carreira</h2>
                <p>
                  So I said knees up Jeffrey grub me old mucker Oxford spend a
                  penny, pukka codswallop fantastic lost the plot Queen's
                  English. Daft he legged it mufty chancer porkies burke blatant
                  pardon me lavatory.
                </p>
              </div>
              <div className="article">
                <h2>Experiencia</h2>
                <p>
                  So I said knees up Jeffrey grub me old mucker Oxford spend a
                  penny, pukka codswallop fantastic lost the plot Queen's
                  English. Daft he legged it mufty chancer porkies burke blatant
                  pardon me lavatory.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="image_user">
              <img src={user} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
