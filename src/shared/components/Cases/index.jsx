import React, { useEffect, useRef, useState } from "react"

import Section from "@components/Section"
import Container from "@components/Container"
import Translate from "@components/Translate"

import cases from "./cases"
import CardCase from "./components/CardCase"

import "./styles.scss"

const Case = () => {
  const item = {
    title: "CASE_TITLE",
    shadow: "CASE_SHODOW",
    description: "CASE_DESCRIPTION",
  }

  const carrocel = useRef(null)
  let [slide, setSlider] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cases.length)
  }, [])

  const next = () => {
    let value = slide + 1
    if (value === total) {
      value = 0
    }
    setSlider(value)
  }

  const prev = () => {
    let value = slide - 1
    if (value < 0) {
      value = total - 1
    }
    setSlider(value)
  }

  return (
    <div id="cases" className="Cases">
      <Container>
        <Section item={item} />
        <div className="carousel-wrapper">
          <div ref={carrocel} className="carousel">
            {cases.map((item, index) => (
              <CardCase active={index === slide} key={index} item={item} />
            ))}
          </div>
          <div className="controls">
            <div onClick={prev} className="next" />
            {cases.map((item, index) => (
              <span className={`point ${index === slide ? "active" : ""}`} />
            ))}
            <div onClick={next} className="prev" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Case
