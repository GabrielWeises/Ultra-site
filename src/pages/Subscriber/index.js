import React from "react";

import { Container, Banner, Center } from "./styles";
import Background from "../../assets/foto1.jpg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Subscriber = () => {
  return (
    <Container>
      <Header />
      <Banner>
        <Center>
          <div className="title-box">
            <h1>Área do Assinante</h1>
            <h2>Área do Assinante:</h2>
          </div>
          <div className="login-box">
            <h2>Faça Login</h2>
            <label htmlFor="email">Login E-mail</label>
            <input type="text" placeholder="email@mail.com" />
            <label htmlFor="email">Senha</label>
            <input type="password" placeholder="senha" />
          </div>
          <div className="btn-group">
            <div className="button-box">
              <div className="button">
                <i class="fas fa-barcode"></i>
              </div>
              <span>2° via de boleto</span>
            </div>
            <div className="button-box">
              <div className="button">
                <i class="fas fa-box-open"></i>
              </div>
              <div className="text">
                <span>Informações sobre seu plano</span>
              </div>
            </div>
          </div>
        </Center>
      </Banner>

      <Center>
        <div className="content">
          <div className="texts">
            <p>
              Pra estar com um a Ultra, um cliente precisa estar satisfeito de
              todas as formas possíveis. Independetemente da empresa que você
              utiliza hoje, não aceite menos que isso.{" "}
            </p>
            <p>
              Somos rápidos. Somos dinâmicos. Somos ultra, por isso oferecemos
              adesão sem fidelidade.
            </p>
            <p> Para saber mais, entre em contato coma ultra.</p>
          </div>
          <a>
            <div className="wpp-button">
              <img src={require("../../assets/zap.png")} alt="" />
              <div>
                <span className="title">Whatsapp</span>
                <span className="cel">(34) 1234 5678</span>
              </div>
            </div>
          </a>
        </div>
      </Center>
      <Footer />
    </Container>
  );
};

export default Subscriber;
