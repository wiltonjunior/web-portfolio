import React, { useState, useEffect } from "react"

import Button from "@components/Button"
import Container from "@components/Container"
import Translate from "@components/Translate"

import "./styles.scss"

const Header = () => {
  const [active, setActive] = useState(0)
  const [className, setClassName] = useState("")

  useEffect(() => {
    window.onscroll = () => handleScroll()
  }, [])

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 150) {
      setClassName("header-fixed")
    } else {
      setClassName("")
    }
  }

  const goTo = (item, index) => {
    if (item.id) {
      const element = document.getElementById(item.id)
      setTimeout(() => {
        window.scrollTo({
          behavior: element ? "smooth" : "auto",
          top: element ? element.offsetTop : 0,
        })
      }, 100)
    }
    setActive(index)
  }

  const itens = [
    { title: "HEADER_ITEM_TITLE_HOME", id: "home" },
    { title: "HEADER_ITEM_TITLE_ABOUT", id: "about" },
    { title: "HEADER_ITEM_TITLE_CASES", id: "cases" },
    { title: "HEADER_ITEM_TITLE_CONTACT", id: "contact" },
    { component: () => <Button basic>HEADER_ITEM_TITLE_CV</Button> },
  ]

  const logo = () => {
    return (
      <div className="logo">
        <span className="fistname">Wilton</span>
        <strong>.</strong>
        <span className="lastname">Jr</span>
      </div>
    )
  }

  const menu = () => {
    return (
      <div className="menu">
        <ul>
          {itens.map((item, index) => (
            <li
              key={index}
              onClick={() => goTo(item, index)}
              className={index === active ? "active" : null}
            >
              {item.component ? item.component() : <Translate>{item.title}</Translate> }
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="Header">
      <div className={className}>
        <Container>
          <div className="header_body">
            {logo()}
            {menu()}
          </div>
          <div className="header_body_mobile">
            <div className="navbar">
              {logo()}
              <span className="hamburger-box" />
            </div>
            {/* {menu()} */}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header
