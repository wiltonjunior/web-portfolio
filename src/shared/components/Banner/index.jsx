import React from "react"
import Particles from "react-particles-js"

import Header from "@components/Header"
import Button from "@components/Button"
import Container from "@components/Container"
import Translate from "@components/Translate"

import Image from "@svg/inline/banner.inline.svg"

import "./styles.scss"

const Banner = () => {
  const params = {
    particles: {
      number: { value: 30, density: { enable: true, value_area: 1000 } },
      color: { value: "#407BFF" },
      shape: {
        type: "circle",
        opacity: 0.4,
        stroke: { width: 0, color: "#407BFF" },
        polygon: { nb_sides: 5 },
      },
      opacity: {
        value: 0.3,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.12,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.08, sync: false },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#fff",
        opacity: 0.2,
        width: 1.3,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  }

  const goTo = id => {
    const element = document.getElementById(id)
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop : 0,
      })
    }, 100)
  }

  return (
    <div id="home" className="Banner">
      <Particles canvasClassName="particles" params={params} />
      <div className="banner_header">
        <Header />
      </div>
      <Container>
        <div className="banner_main">
          <div className="column">
            <div className="title">
              <h1>
                <Translate>BANNER_TITLE</Translate>
              </h1>
              <p>
                <Translate>BANNER_SUB_TITLE</Translate>
              </p>
            </div>
            <div className="description">
              <p>
                <Translate html>BANNER_SUB_PARAGRAPH_ONE</Translate>
              </p>
            </div>
            <div className="actions">
              <Button onClick={() => goTo("cases")}>
                BANNER_BUTTON_PORTFOLIO
              </Button>
              <Button basic onClick={() => goTo("contact")}>
                BANNER_BUTTON_CONTACT
              </Button>
            </div>
          </div>
          <div className="column">
            <Image />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner
