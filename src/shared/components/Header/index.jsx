import React from "react"

import Button from "@components/Button"

import "./styles.scss"

const Header = () => {
  const itens = [
    { title: "Home", className: "active" },
    { title: "Sobre" },
    { title: "Portfolio" },
    { title: "Contato" },
    { component: () => <Button basic>Acessar CV</Button> },
  ]

  return (
    <div className="Header">
      <div className="logo">
        <span className="fistname">Wilton</span>
        <strong>.</strong>
        <span className="lastname">Jr</span>
      </div>
      <div className="menu">
        <ul>
          {itens.map((item, index) => (
            <li key={index} className={item.className || ""}>
              {item.component ? item.component() : item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Header
