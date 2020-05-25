import React from "react"

import Button from "@components/Button"
import Container from "@components/Container"

import "./styles.scss"

const Contato = () => {
  return (
    <div id='contact' className="Contato">
      <Container>
        <div className="contato_main">
          <div className="column">
            <div className="contact">
            <div className="block-contact">
              <ul className="contact-list">
                <li>
                  <em className="contact-icon fa-phone"></em>
                  <div className="contact-text">
                    <span>+55 84 9968-6176</span>
                  </div>
                </li>
                <li>
                  <em className="contact-icon fas fa-envelope"></em>
                  <div className="contact-text">
                    <span>contato@wiltonjunior.me</span>
                  </div>
                </li>
                <li>
                  <em className="contact-icon fas fa-paper-plane"></em>
                  <div className="contact-text">
                    <span>Whatsapp</span>
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
            <form className="form">
              <div className="row">
                <div className="col-6">
                  <div className="field-item">
                    <label className="field-label">Nome</label>
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="contact-name"
                        className="contact-input"
                        placeholder="Introduce yourself"
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
                        placeholder="Who do we replay to"
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
                    placeholder="Leave your question or comment here"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-send">
                  <Button>Enviar</Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contato
