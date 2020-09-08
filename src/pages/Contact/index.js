import React from "react";

import { Container, Banner, Center } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../assets/mao.jpg";
import backgroundForm from "../../assets/bg.jpg";

const Contact = () => {
  return (
    <Container>
      <Header />
      <Banner style={{ backgroundImage: "url(" + Background + ")" }}>
        <Center>
          <div className="header">
            <p className="title">Ouvidoria</p>
            <p className="sub-title">Ouvidoria:</p>
          </div>
          <div className="box-1">
            <a>
              <div className="button">
                <i class="fab fa-whatsapp"></i>
                <div>
                  <p className="title">Whatsapp</p>
                  <p className="title">Suporte</p>
                  <span className="cel">(34) 1234 5678</span>
                </div>
                <i class="fas fa-tools"></i>
              </div>
            </a>
            <a>
              <div className="button margin-left">
                <i class="fab fa-whatsapp"></i>
                <div>
                  <p className="title">Whatsapp</p>
                  <p className="title">Comercial</p>
                  <span className="cel">(34) 1234 5678</span>
                </div>
                <i class="fas fa-shopping-cart"></i>
              </div>
            </a>
          </div>
          <a>
            <div className="button margin-top">
              <i class="far fa-envelope"></i>
              <div>
                <p className="title">Criticas e</p>
                <p className="title">Sugestões</p>
                <span className="cel">email@mail.com</span>
              </div>
            </div>
          </a>
          <div className="media-group">
            <a>
              <div className="button-case">
                <div className="media-button">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <span>facebook</span>
              </div>
            </a>
            <a>
              <div className="button-case margin-left">
                <div className="media-button">
                  <i class="fab fa-instagram"></i>
                </div>
                <span>instagram</span>
              </div>
            </a>
          </div>
        </Center>
      </Banner>
      <div
        style={{ backgroundImage: "url(" + backgroundForm + ")" }}
        className="form"
      >
        <div className="header">
          <p className="title">Colaborador Ultra</p>
          <p className="sub-title">Seja um colaborador Ultra</p>
        </div>
        <div className="body">
          <div className="form-1">
            <div className="input">
              <label htmlFor="name">
                E-MAIL<span className="ast">*</span>
              </label>
              <input placeholder="Seu nome" type="text" />
            </div>

            <div className="input">
              <label htmlFor="name">NÚMERO DE TELEFONE</label>
              <input placeholder="+55 34 9 9999 9999" type="text" />
            </div>
            <div className="input">
              <label htmlFor="name">
                CARREGUE SEU CURRÍCULO<span className="ast">*</span>
              </label>
              <input type="file" name="cur" id="cur" />
            </div>
          </div>
          <div className="middle">
            <div className="form-2">
              <label htmlFor="name">
                MENSAGEM<span className="ast">*</span>
              </label>
              <input placeholder="Escreva uma mensagem" type="text" />
            </div>
            <div className="button">
              <button type="submit">ENVIO</button>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{ marginTop: 0 }} />
    </Container>
  );
};

export default Contact;
