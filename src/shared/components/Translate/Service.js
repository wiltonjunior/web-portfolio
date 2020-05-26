import React from 'react'
import i18N from '@i18n'
import Utils from '@utils'
import configs from '@configs'

const replaceOthers = (instance, key, dict, others = {}) => {
  let value = key
  let tmp
  if (value) {
    const valueSplit = value.split('{')
    for (let item in valueSplit) {
      tmp = valueSplit[item].substr(0, valueSplit[item].indexOf('}'))
      if (tmp) {
        if (dict[tmp]) {
          value = value.replace('{' + tmp + '}', dict[tmp])
        }
        if (others[tmp]) {
          value = value.replace('{' + tmp + '}', others[tmp])
        }
      }
    }
    if (value.indexOf('{') > -1 && instance.tries) {
      instance.tries--
      value = replaceOthers(instance, value, dict, others)
    }
    instance.tries = 10
    return value
  }
}

class LanguageService {
  static KEY_LANG = 'mais-milhas-language'

  constructor() {
    this.tries = 10
    this.getUserLanguage = this.getUserLanguage.bind(this)
    this.translate = this.translate.bind(this)
  }

  getUserLanguage() {
    const localLang = ''
    if (typeof localLang === 'string' && i18N[localLang]) {
      return i18N[localLang]
    }
    const winLanguage = 'pt-BR'
    if (winLanguage && i18N[winLanguage]) {
      return i18N[winLanguage]
    }
    const winLanguages = 'pt-BR'
    if (Array.isArray(winLanguages)) {
      for (let item in winLanguages) {
        if (i18N[winLanguages[item]]) {
          return i18N[winLanguages[item]]
        }
      }
    }
    const lang = Utils.getValue(configs, 'user.lang')
    if (typeof lang === 'string' && i18N[lang]) {
      return i18N[lang]
    }
    return i18N[Object.keys(i18N)[0]]
  }

  translate(key, others, html) {
    const dict = this.getUserLanguage()
    let value = dict[key] || key
    if (typeof value === 'function') {
      value = value(dict)
    }
    value = replaceOthers(this, value, dict, others)
    if (html) {
      return <span dangerouslySetInnerHTML={{ __html: value }} />
    } else {
      return value
    }
  }
}
export default LanguageService
