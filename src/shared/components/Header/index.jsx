import React from "react"

import "./styles.scss"

const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <span className="fistname">Wilton</span>
        <strong>.</strong>
        <span className="lastname">Jr</span>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Sobre</li>
          <li>Portfolio</li>
          <li>Contato</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
