import React, { useState, useEffect } from "react"

import clsx from "clsx"

import Button from "@components/Button"
import Container from "@components/Container"
import Translate from "@components/Translate"

import "./styles.scss"

const Header = () => {
  let scrollWidth = []
  const [active, setActive] = useState(0)
  const [className, setClassName] = useState("")
  const [menuMobile, setMenuMobile] = useState(false)

  useEffect(() => {
    window.onscroll = () => handleScroll()
    initScrollWidth()
  }, [])

  const initScrollWidth = () => {
    const ids = ["home", "about", "cases", "contact"]
    for (const item of ids) {
      const value = getElementScroll(item)
      scrollWidth.push(value)
    }
  }

  const handleScroll = () => {
    const scroll = document.documentElement.scrollTop
    setActive(verifyScroll(scroll) || 0)
    if (scroll > 150) {
      setClassName("header-fixed")
    } else {
      setClassName("")
    }
  }

  const getElementScroll = id => {
    return document.getElementById(id).offsetTop - 200
  }

  const verifyScroll = scroll => {
    for (let i = 0; i < scrollWidth.length; i++) {
      if (i + 1 >= scrollWidth.length) {
        if (scroll >= scrollWidth[i]) {
          return i
        }
      } else {
        if (scroll >= scrollWidth[i] && scroll <= scrollWidth[i + 1]) {
          return i
        }
      }
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
    {
      component: () => (
        <Button
          href="https://wiltonjunior.s3-sa-east-1.amazonaws.com/Wilton_Silva_dos_Santos_J_nior.pdf"
          basic
        >
          HEADER_ITEM_TITLE_CV
        </Button>
      ),
    },
  ]

  const openMenuMobile = () => {
    setMenuMobile(!menuMobile)
  }

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
              {item.component ? (
                item.component()
              ) : (
                <Translate>{item.title}</Translate>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const classes = clsx(["menu_mobile"], { active: menuMobile })

  return (
    <div className="Header">
      <div className={className}>
        <Container>
          <div className="header_body">
            {logo()}
            {menu()}
          </div>
          <div className={classes}>
            <div className="navbar">
              {logo()}
              <span onClick={openMenuMobile} className="hamburger-box" />
            </div>
            {menuMobile && <div className="menu_mobile_body"> {menu()}</div>}
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Header
