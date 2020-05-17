import React, { useEffect, useRef, useState } from "react"

import Section from "@components/Section"
import Container from "@components/Container"

import cases from './cases'

// import CardCase from "./components/CardCase"

import "./styles.scss"

const Case = () => {
  const item = {
    title: "Cases",
    shadow: "Portfolio",
    description: "Navegue em meus tralhos.",
  }

  const carrocel = useRef(null)
  let [moving, setMoving] = useState(true)
  let [total, setTotal] = useState(5)
  let [slide, setSlider] = useState(0)

  let itemClassName = "carousel__photo"
  let items = document.getElementsByClassName(itemClassName)

  // Set classes
  const setInitialClasses = () => {
    if (items[total - 1]) {
      items[total - 1].classList.add("prev")
      items[0].classList.add("active")
      items[1].classList.add("next")
    }
  }

  // Next navigation handler
  const moveNext = () => {
    if (slide === total - 1) {
      slide = 0
    } else {
      slide++
    }
    moveCarouselTo(slide)
  }

  // Previous navigation handler
  const movePrev = () => {
    if (slide === 0) {
      slide = total - 1
    } else {
      slide--
    }
    moveCarouselTo(slide)
  }

  const moveCarouselTo = slide => {
    // Update the "old" adjacent slides with "new" ones
    var newPrevious = slide - 1,
      newNext = slide + 1,
      oldPrevious = slide - 2,
      oldNext = slide + 2
    // Test if carousel has more than three items
    if (total - 1 > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = total - 1
      } else if (newNext >= total - 1) {
        oldNext = 0
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = total - 1
        oldPrevious = total - 2
        oldNext = slide + 1
      } else if (slide === total - 1) {
        newPrevious = slide - 1
        newNext = 0
        oldNext = 1
      }
      // Now we've worked out where we are and where we're going,
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName
      items[oldNext].className = itemClassName
      // Add new classes
      items[newPrevious].className = itemClassName + " prev"
      items[slide].className = itemClassName + " active"
      items[newNext].className = itemClassName + " next"
    }
  }

  const initCarouse = () => {
    setInitialClasses()
  }

  useEffect(() => {
    initCarouse()
  }, [initCarouse])

  return (
    <div className="Cases">
      <Container>
        <Section item={item} />
        <div className="carousel-wrapper">
          <div ref={carrocel} className="carousel">

            {/* {cases.map((item, index) => 
            <CardCase key={index} item={item} />
            )} */}

            <div onClick={moveNext} className="next"></div>
            <div onClick={movePrev} className="prev"></div>
          </div>
        </div>
        {/* <CardCase /> */}
      </Container>
    </div>
  )
}

export default Case
