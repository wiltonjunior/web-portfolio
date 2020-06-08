import React, { useState } from "react"

import axios from "axios"

import Button from "@components/Button"
import Container from "@components/Container"
import Translate, {dict} from "@components/Translate"

import "./styles.scss"

const Contato = () => {
  const [object, setObject] = useState({})

  const onChange = ({ target: { value, name } }) => {
    object[name] = value
    setObject({ ...object })
  }

  const onSubmit = async () => {
    const success = await axios.post("https://api.wiltonjunior.dev/mail",
      object
    )
  }

  return (
    <div id="contact" className="Contato">
      <Container>
        <div className="contato_main">
          <div className="column">
            <div className="contact">
              <div className="block-contact">
                <ul className="contact-list">
                  <li>
                    <em className="contact-icon fa-phone"></em>
                    <div className="contact-text">
                      <span>
                        <Translate>CONTATO_FONE</Translate>
                      </span>
                    </div>
                  </li>
                  <li>
                    <em className="contact-icon fas fa-envelope"></em>
                    <div className="contact-text">
                      <span>
                        <Translate>CONTATO_EMAIL</Translate>
                      </span>
                    </div>
                  </li>
                  <li>
                    <em className="contact-icon fas fa-paper-plane"></em>
                    <div className="contact-text">
                      <span>
                        <Translate>CONTATO_WHASTSAP</Translate>
                      </span>
                    </div>
                  </li>
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
                        placeholder={dict.translate("CONTATO_INPUT_PLACEHOLDER_NAME")}
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
                        placeholder={dict.translate("CONTATO_INPUT_PLACEHOLDER_EMAIL")}
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
                    placeholder={dict.translate("CONTATO_INPUT_PLACEHOLDER_MESSAGE")}
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
