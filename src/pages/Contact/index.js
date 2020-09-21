import React from "react";

import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../assets/banner-colaborador.jpg";
import BackgroundMobile from "../../assets/banner-colaborador-mobile.png";
import AssinanteBG from "../../assets/assinante-bg.png";
import Lines from "../../assets/lines-2.png";
import "./mobile.css";

const Ombudsman = () => {
  return (
    <Container>
      <Header />
      <div className="desktop">
        <div
          style={{ backgroundImage: "url(" + Background + ")" }}
          className="container"
        >
          <Form style={{ backgroundImage: "url(" + Lines + ")" }}>
            <div className="header">
              <p className="title">Colaborador Ultra</p>
              <p className="sub-title">Seja um colaborador ultra</p>
            </div>
            <div className="form">
              <div className="box1">
                <div className="input">
                  <label htmlFor="name">
                    NOME<span className="ast">*</span>
                  </label>
                  <input placeholder="Seu nome" type="text" />
                </div>
                <div className="input">
                  <label htmlFor="name">
                    E-MAIL<span className="ast">*</span>
                  </label>
                  <input placeholder="email@mail.com" type="email" />
                </div>
              </div>
              <div className="box2">
                <div className="input">
                  <label htmlFor="name">
                    NÚMERO DE TELEFONE<span className="ast">*</span>
                  </label>
                  <input placeholder="+55 34 9 9999 9999" type="text" />
                </div>
                <div className="input upload">
                  <label htmlFor="name">
                    CARREGUE SEU CURRÍCULO<span className="ast">*</span>
                  </label>
                  <label className="upload-label" htmlFor="selecao-arquivo">
                    Upload /
                  </label>
                  <input id="selecao-arquivo" type="file" />
                </div>
              </div>
              <div className="box3">
                <div className="input">
                  <label htmlFor="name">
                    MENSAGEM<span className="ast">*</span>
                  </label>
                  <input placeholder="Escreva uma mensagem" type="text" />
                </div>
              </div>
              <div className="button">
                <button type="submit">ENVIO</button>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <div className="mobile2">
        <div
          style={{ backgroundImage: "url(" + BackgroundMobile + ")" }}
          className="banner-mobile2"
        >
          <div className="header">
            <p className="title">Colaborador Ultra</p>
            <p className="sub-title">Seja um colaborador ultra</p>
          </div>
          <form style={{ backgroundImage: "url(" + Lines + ")" }}>
            <div className="input">
              <label htmlFor="name">
                nome<span className="ast">*</span>
              </label>
              <input id="name" placeholder="Seu nome" type="text" />
            </div>
            <div className="input">
              <label htmlFor="email">
                e-mail<span className="ast">*</span>
              </label>
              <input id="email" placeholder="email@mail.com" type="text" />
            </div>
            <div className="input">
              <label htmlFor="number">
                NÚMERO DE TELEFONE<span className="ast">*</span>
              </label>
              <input id="number" placeholder="+55 34 9 9999 9999" type="text" />
            </div>
            <div className="input upload">
              <label htmlFor="name">
                CARREGUE SEU CURRÍCULO<span className="ast">*</span>
              </label>
              <label className="upload-label" htmlFor="selecao-arquivo">
                Upload /
              </label>
              <input id="selecao-arquivo" type="file" />
            </div>
            <div className="input">
              <label htmlFor="name">
                MENSAGEM<span className="ast">*</span>
              </label>
              <input placeholder="Escreva uma mensagem" type="text" />
            </div>
            <div className="button">
              <button type="submit">ENVIO</button>
            </div>
          </form>
        </div>
        <div
          className="form"
          style={{ backgroundImage: "url(" + AssinanteBG + ")" }}
        ></div>
      </div>
      <Footer />
    </Container>
  );
};

export default Ombudsman;
