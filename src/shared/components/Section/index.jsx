import React from "react"

import "./styles.scss"

const Section = props => {
  const { item, effect } = props
  return (
    <div className="Section">
      <div class="section-head">
        {effect && (
          <div class="section-head-line">
            <span class="line-1"></span>
            <span class="line-2"></span>
            <span class="line-3"></span>
            <span class="line-4"></span>
            <span class="line-5"></span>
            <span class="line-6"></span>
            <span class="line-7"></span>
            <span class="line-8"></span>
          </div>
        )}
        <h2 class="title" title={item?.shadow}>
          {item?.title}
        </h2>
        <p class="description">{item?.description}</p>
      </div>
    </div>
  )
}

export default Section
