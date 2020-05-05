import React from "react"
import Particles from "react-particles-js"

import Header from "@components/Header"
import Button from "@components/Button"
import Container from "@components/Container"

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
  return (
    <div className="Banner">
      <Particles canvasClassName="particles" params={params} />
      <Container>
        <div className="banner_header">
          <Header />
        </div>
        <div className="banner_main">
          <div className="column">
            <div className="title">
              <h1>Wilton Junior,</h1>
              <p>Full Stack Developer</p>
            </div>
            <div className="description">
              <p>
                Programador full-stack, apaixonado pelo desenvolvedor de
                software, com sólida formação acadêmica. Capacidade de trabalhar
                em equipe e solucionar problemas de forma rápida.
              </p>
              <p>
                Habilidade de manter e aprimorar o softwares com o objetivo de
                melhorar a funcionalidade operacional de acordo com os
                requisitos de negócios. Possuo conhecimento em linguagens de
                programação de software, como , JavaScript, Java e as principais
                frameworks front-end como, React, Angular e Vuejs.
              </p>
            </div>
            <div className="actions">
              <Button>Portfolio</Button>
              <Button basic>Contato</Button>
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
