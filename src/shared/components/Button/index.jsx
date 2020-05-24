import React from "react"

import "./styles.scss"

const Button = props => {
  const { basic, href } = props
  if(href){
    return <a href={href} target="_black" className={`Button ${basic ? 'basic' : ''}`}>{props.children}</a>
  }else{
    return <button className={`Button ${basic ? 'basic' : ''}`}>{props.children}</button>
  }
}

export default Button
