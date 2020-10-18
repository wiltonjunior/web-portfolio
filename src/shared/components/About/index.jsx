import React from "react"

import Section from "@components/Section"
import Container from "@components/Container"
import Translate from "@components/Translate"

import user from "@images/user.png"

import "./styles.scss"

const About = () => {
  const item = {
    title: "ABOUT_SECTION_TITLE",
    shadow: "ABOUT_SECTION_SHADOW",
    description: "ABOUT_SECTION_DESCRIPTION",
  }

  const articles = [
    {
      title: "ABOUT_CARD_TITLE_ONE",
      description: "ABOUT_CARD_DESCRIPTION_ONE",
    },
    {
      title: "ABOUT_CARD_TITLE_TWO",
      description: "ABOUT_CARD_DESCRIPTION_TWO",
    },
  ]

  return (
    <div id="about" className="About">
      <Container>
        <Section item={item} />
        <div className="about_main">
          <div className="column">
            <div className="header">
              {articles.map((item, index) => (
                <div key={index} className="article">
                  <h2>
                    <Translate>{item.title}</Translate>
                  </h2>
                  <p>
                    <Translate>{item.description}</Translate>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="column">
            <div className="image_user">
              <img src={user} alt="user" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
