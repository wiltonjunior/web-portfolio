import React, { useState, useEffect } from "react"

import Button from "@components/Button"
import Container from "@components/Container"

import "./styles.scss"

const Header = () => {
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

  const itens = [
    { title: "Home", className: "active" },
    { title: "Sobre" },
    { title: "Cases" },
    { title: "Contato" },
    { component: () => <Button basic>Acessar CV</Button> },
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
            <li key={index} className={item.className || ""}>
              {item.component ? item.component() : item.title}
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
            {logo()}
            {menu()}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header
