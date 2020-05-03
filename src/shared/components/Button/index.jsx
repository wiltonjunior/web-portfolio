import React from "react"

import "./styles.scss"

const Button = props => {
  const { basic } = props
  return <button className={`Button ${basic ? 'basic' : ''}`}>{props.children}</button>
}

export default Button
