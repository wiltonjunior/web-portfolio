import React, { useEffect, useRef, useState } from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import cases from "./cases"

import CardCase from "./components/CardCase"

import "./styles.scss"

const Case = () => {
  const item = {
    title: "Cases",
    shadow: "Portfolio",
    description: "Navegue em meus tralhos.",
  }

  const carrocel = useRef(null)
  let [slide, setSlider] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cases.length)
  }, [])

  const next = () => {
    let value = slide + 1;
    console.log(value)
    if (value === total) {
      value = 0
    } 
    setSlider(value)
  }

  const prev = () => {
    let value = slide - 1;
    if (value < 0) {
      value = total -1;
    } 
    setSlider(value)
  }

  return (
    <div className="Cases">
      <Container>
        <Section item={item} />
        <div className="carousel-wrapper">
          <div ref={carrocel} className="carousel">
            {cases.map((item, index) => (
              <CardCase active={index === slide} key={index} item={item} />
            ))}
          </div>
          <div className="controls">
            <div onClick={prev} className="next"></div>
            {cases.map((item, index) => (
              <span
                className={`point ${index === slide ? "active" : ""}`}
              ></span>
            ))}
            <div onClick={next} className="prev"></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Case
