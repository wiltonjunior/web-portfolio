import React from "react"

// import Section from "@components/Section"
import Container from "@components/Container"

// import CardCase from "./components/CardCase"

import "./styles.scss"
import { useEffect } from "react"

const Case = () => {
  // const item = {
  //   title: "Cases",
  //   shadow: "Portfolio",
  //   description: "Navegue em meus tralhos.",
  // }

  let itemClassName = "carousel__photo"
  let items = document.getElementsByClassName(itemClassName),
    totalItems = items.length,
    slide = 0,
    moving = true

  // Set classes
  const setInitialClasses = () => {
    // Targets the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add("prev")
    items[0].classList.add("active")
    items[1].classList.add("next")
  }
  // Set event listeners
  const setEventListeners = () => {
    var next = document.getElementsByClassName("carousel__button--next")[0],
      prev = document.getElementsByClassName("carousel__button--prev")[0]
    next.addEventListener("click", moveNext)
    prev.addEventListener("click", movePrev)
  }

  // Next navigation handler
  const moveNext = () => {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0, else +1
      if (slide === totalItems - 1) {
        slide = 0
      } else {
        slide++
      }
      // Move carousel to updated slide
      moveCarouselTo(slide)
    }
  }
  // Previous navigation handler
  const movePrev = () => {
    // Check if moving
    if (!moving) {
      // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = totalItems - 1
      } else {
        slide--
      }

      // Move carousel to updated slide
      moveCarouselTo(slide)
    }
  }

  const disableInteraction = () => {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    moving = true
    // setTimeout runs its const once after the given time
    setTimeout(function () {
      moving = false
    }, 500)
  }

  const moveCarouselTo = slide => {
    // Check if carousel is moving, if not, allow interaction
    if (!moving) {
      // temporarily disable interactivity
      disableInteraction()
      // Update the "old" adjacent slides with "new" ones
      var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2
      // Test if carousel has more than three items
      if (totalItems - 1 > 3) {
        // Checks and updates if the new slides are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = totalItems - 1
        } else if (newNext >= totalItems - 1) {
          oldNext = 0
        }
        // Checks and updates if slide is at the beginning/end
        if (slide === 0) {
          newPrevious = totalItems - 1
          oldPrevious = totalItems - 2
          oldNext = slide + 1
        } else if (slide === totalItems - 1) {
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
  }

  const initCarouse = () => {
    setInitialClasses()
    setEventListeners()
    // Set moving to false so that the carousel becomes interactive
    moving = false
  }


  useEffect(() => {
    initCarouse()
  }, [initCarouse])


  return (
    <div className="Cases">
      <Container>
        {/* <div className="carousel-wrapper">
          <Section item={item} />
        </div> */}
        <div className="carousel-wrapper">
          <div className="carousel">
            <img
              alt="image"
              className="carousel__photo initial"
              src="https://randomuser.me/api/portraits/women/41.jpg"
            />

            <img
               alt="image"
              className="carousel__photo"
              src="https://randomuser.me/api/portraits/women/42.jpg"
            />
            <img
               alt="image"
              className="carousel__photo"
              src="https://randomuser.me/api/portraits/women/43.jpg"
            />
            <img
               alt="image"
              className="carousel__photo"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
            <img
               alt="image"
              className="carousel__photo"
              src="https://randomuser.me/api/portraits/women/45.jpg"
            />

            <div className="carousel__button--next"></div>
            <div className="carousel__button--prev"></div>
          </div>
        </div>
        {/* <CardCase /> */}
      </Container>
    </div>
  )
}

export default Case
