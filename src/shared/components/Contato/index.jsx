import React from "react"

import Container from "@components/Container"

// import "./styles.scss"

const Contato = () => {
  return (
    <div className="Contato">
      <Container>
        <div className="contato_main">
          <div className="column">
            <div className="block-contact">
               <ul className="contact-list">
                <li>
                 <em className="contact-icon fa-phone"></em> 
                  <div className="contact-text">
                    <span>+44 0123 4567</span>
                  </div>
                </li>
                <li>
                 <em className="contact-icon fas fa-envelope"></em> 
                  <div className="contact-text">
                    <span>info@company.com</span>
                  </div>
                </li>
                <li>
                 <em className="contact-icon fas fa-paper-plane"></em> 
                  <div className="contact-text">
                    <span>Join us on Telegram</span>
                  </div>
                </li> 
              </ul> 
              <div className="nk-circle-animation nk-df-center white small"></div>
            </div> 
          </div>

          <div className="column">
            <div className="nk-block-text">
              <div className="nk-block-text-head">
                <h2 className="title">Contact Us</h2>
                <p>
                  We are always open and we welcome and questions you have for
                  our team. If you wish to get in touch, please fill out the
                  form below. Someone from our team will get back to you
                  shortly.
                </p>
              </div>
            </div>
            <form className="nk-form-submit">
              <div className="row">
                <div className="col-sm-6">
                  <div className="field-item animated fadeInUp">
                    <label className="field-label ttu">Your Name</label>
                    <div className="field-wrap">
                      <input
                        name="contact-name"
                        placeholder="Introduce yourself"
                        type="text"
                        className="input-bordered required"
                        aria-required="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="field-item animated fadeInUp"
                  >
                    <label className="field-label ttu">Your Email</label>
                    <div className="field-wrap">
                      <input
                        name="contact-email"
                        placeholder="Who do we replay to"
                        type="email"
                        className="input-bordered required email"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="field-item animated fadeInUp">
                <label className="field-label ttu">Your Message</label>
                <div className="field-wrap">
                  <textarea
                    name="contact-message"
                    placeholder="Leave your question or comment here"
                    className="input-bordered input-textarea required"
                  />
                </div>
              </div>
              <input
                type="text"
                className="d-none"
                name="form-anti-honeypot"
                value=""
              />
              <div className="row">
                <div className="col-sm-5 text-right animated fadeInUp">
                  <button type="submit" className="btn btn-round btn-primary">
                    SEND
                  </button>
                </div>
                <div className="col-sm-7 order-sm-first">
                  <div className="form-results"></div>
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
