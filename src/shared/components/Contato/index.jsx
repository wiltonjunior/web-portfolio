import React, { useState } from "react"

import axios from "axios"

import Button from "@components/Button"
import Container from "@components/Container"
import Translate, { dict } from "@components/Translate"

import Git from "@svg/inline/git.inline.svg"
import Email from "@svg/inline/email.inline.svg"
import Instagram from "@svg/inline/instagram.inline.svg"
import Whatsapp from "@svg/inline/whatsapp.inline.svg"
import Linkedin from "@svg/inline/linkedin.inline.svg"

import "./styles.scss"

const Contato = () => {
  const [object, setObject] = useState({})

  const onChange = ({ target: { value, name } }) => {
    object[name] = value
    setObject({ ...object })
  }

  const onSubmit = async () => {
    const success = await axios.post(
      "https://api.wiltonjunior.dev/mail",
      object
    )
  }

  const list = [
    {
      icon: Whatsapp,
      title: "CONTATO_WHATSAPP",
      href: 'https://api.whatsapp.com/send?phone=5584994686176&text=Olá,%20meu%20amigo!'
    },
    {
      icon: Instagram,
      title: "CONTATO_INSTAGRAM",
      href: "https://www.instagram.com/wilton.juniorr/"
    },
    {
      icon: Email,
      title: "CONTATO_EMAIL",
      href: "mailto:wiltonjuniorssd@gmail.com?subject=Contato&amp;body=Olá,%20meu%20amigo"
    },
    {
      icon: Linkedin,
      title: "CONTATO_LINKEDIN",
      href: 'https://www.linkedin.com/in/wilton-junior/'
    },
    {
      icon: Git,
      title: "CONTATO_GIT",
      href: 'https://github.com/wiltonjunior'
    },
  ]

  return (
    <div id="contact" className="Contato">
      <Container>
        <div className="contato_main">
          <div className="column">
            <div className="contact">
              <div className="block-contact">
                <ul className="contact-list">
                  {list.map((item, index) => (
                    <li key={index}>
                      <span className="icon">{<item.icon />}</span>
                      <div className="contact-text">
                        <a href={item.href} target="_black">
                          <Translate>{item.title}</Translate>
                        </a>
                      </div>
                    </li>
                  ))}
                  {/* <li>
                    <em className="contact-icon fas fa-envelope"></em>
                    <div className="contact-text">
                      <span>
                        <Translate>CONTATO_EMAIL</Translate>
                      </span>
                    </div>
                  </li> */}
                </ul>
                <div className="circle-animation"></div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="header">
              <h2 className="title">
                <Translate>CONTATO_TITLE</Translate>
              </h2>
              <p className="description">
                <Translate>CONTATO_DESCRITPION</Translate>
              </p>
            </div>
            <div className="form">
              <div className="row">
                <div className="col-6">
                  <div className="field-item">
                    <label className="field-label">
                      <Translate>CONTATO_INPUT_LABEL_NAME</Translate>
                    </label>
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="contact-name"
                        value={object.Name}
                        onChange={onChange}
                        className="contact-input"
                        placeholder={dict.translate(
                          "CONTATO_INPUT_PLACEHOLDER_NAME"
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="field-item">
                    <label className="field-label">
                      <Translate>CONTATO_INPUT_LABEL_EMAIL</Translate>
                    </label>
                    <div className="field-wrap">
                      <input
                        type="email"
                        name="contact-email"
                        className="contact-input"
                        placeholder={dict.translate(
                          "CONTATO_INPUT_PLACEHOLDER_EMAIL"
                        )}
                        value={object.Email}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-item">
                <label className="field-label">
                  <Translate>CONTATO_INPUT_LABEL_MESSAGE</Translate>
                </label>
                <div className="field-wrap">
                  <textarea
                    name="contact-message"
                    className="contact-input"
                    placeholder={dict.translate(
                      "CONTATO_INPUT_PLACEHOLDER_MESSAGE"
                    )}
                    value={object.Message}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-send">
                  <Button onClick={onSubmit}>CONTATO_FORM_SEND</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contato
