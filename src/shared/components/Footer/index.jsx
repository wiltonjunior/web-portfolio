import React from "react"

import Container from "@components/Container"
import Translate from "@components/Translate"

import "./styles.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <Container>
        <div className="Footer_main">
          <Translate>FOOTER_TITLE</Translate>
        </div>
      </Container>
    </div>
  )
}

export default Footer
