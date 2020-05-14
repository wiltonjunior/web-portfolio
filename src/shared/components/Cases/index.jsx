import React from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import CardCase from "./components/CardCase"

import "./styles.scss"
import { useEffect } from "react"

const Case = () => {
  const item = {
    title: "Cases",
    shadow: "Portfolio",
    description: "Navegue em meus tralhos.",
  }

  const slideIndex = 1

  useEffect(() => {
    showSlides(slideIndex)
  })

  // Next/previous controls
  const plusSlides = n => {
    showSlides((slideIndex += n))
  }

  // Thumbnail image controls
  const currentSlide = n => {
    showSlides((slideIndex = n))
  }

  const showSlides = (number) => {
    let index;
    const slides = document.getElementsByClassName("mySlides")
    const dots = document.getElementsByClassName("dot")
    if (number > slides.length) {
      slideIndex = 1
    }
    if (number < 1) {
      slideIndex = slides.length
    }
    for (index = 0; index < slides.length; index++) {
      slides[index].style.display = "none"
    }
    for (index = 0; index < dots.length; index++) {
      dots[index].className = dots[index].className.replace(" active", "")
    }
    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].className += " active"
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
