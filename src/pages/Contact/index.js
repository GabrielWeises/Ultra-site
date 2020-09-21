import React from "react";

import { Container, Form } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../assets/banner-colaborador.jpg";
import Lines from "../../assets/lines-2.png";

const Ombudsman = () => {
  return (
    <Container>
      <Header />
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
      <Footer />
    </Container>
  );
};

export default Ombudsman;
