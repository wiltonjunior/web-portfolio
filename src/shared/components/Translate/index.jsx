import { Component } from 'react'

import i18N from 'app/i18N/'
import configs from 'app/configs/'
import Service from './Service'

let dict
if (!dict) {
  dict = new Service(configs, i18N)
}

class Translate extends Component {
  render () {
    const { word, parameters, children, html } = this.props
    /**/
    if (children) {
      return dict.translate(children, parameters, html)
    } else if (word) {
      return dict.translate(word, parameters, html)
    } else {
      return ''
    }
  }
}

export { dict }
export default Translate
