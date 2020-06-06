import React, { useState } from "react"

import axios from "axios"

import Button from "@components/Button"
import Translate from "@components/Translate"
import Container from "@components/Container"

import "./styles.scss"

const Contato = () => {
  const [object, setObject] = useState({})

  const onChange = ({ target: { value, name } }) => {
    object[name] = value
    setObject({ ...object })
  }

  const onSubmit = async () => {
    const success = await axios.post('https://api.wiltonjunior.dev/mail', object)
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
                      <span>  <Translate>CONTATO_WHASTSAP</Translate></span>
                    </div>
                  </li>
                </ul>
                <div className="circle-animation"></div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="header">
              <h2 className="title">Contato</h2>
              <p className="description">
                Se você deseja entrar em contato, preencha o formulário abaixo.
                Entrarei em contato com você em breve.
              </p>
            </div>
            <div className="form">
              <div className="row">
                <div className="col-6">
                  <div className="field-item">
                    <label className="field-label">Nome</label>
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="contact-name"
                        className="contact-input"
                        placeholder="Name"
                        value={object.Name}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="field-item">
                    <label className="field-label">Email</label>
                    <div className="field-wrap">
                      <input
                        type="email"
                        name="contact-email"
                        className="contact-input"
                        placeholder="Email"
                        value={object.Email}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-item">
                <label className="field-label">Messagem</label>
                <div className="field-wrap">
                  <textarea
                    name="contact-message"
                    className="contact-input"
                    placeholder="Messagem"
                    value={object.Message}
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-send">
                  <Button onClick={onSubmit} >Enviar</Button>
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
