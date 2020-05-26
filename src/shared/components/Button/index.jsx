import React from "react"

import Translate from "@components/Translate"

import "./styles.scss"

const Button = props => {
  const { basic, href, onClick } = props
  if (href) {
    return (
      <a
        href={href}
        target="_black"
        className={`Button ${basic ? "basic" : ""}`}
      >
        <Translate>{props.children}</Translate>
      </a>
    )
  } else {
    return (
      <button className={`Button ${basic ? "basic" : ""}`} onClick={onClick}>
        <Translate>{props.children}</Translate>
      </button>
    )
  }
}

export default Button
