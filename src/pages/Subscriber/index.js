import React from "react";

import { Container, Banner, Center } from "./styles";
import Background from "../../assets/foto2.jpg";
import BackgroundMobile from "../../assets/foto2-mobile.png";
import AssinanteBG from "../../assets/assinante-bg.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./mobile.css";

const Subscriber = () => {
  return (
    <Container>
      <Header />
      <div className="desktop">
        <Banner style={{ backgroundImage: "url(" + Background + ")" }}>
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
      </div>
      <div className="mobile">
        <div
          style={{ backgroundImage: "url(" + BackgroundMobile + ")" }}
          className="banner"
        >
          <div className="header-mobile">
            <p className="title">Área do Assinante</p>
            <p className="sub-title">Área do Assinante:</p>
          </div>
          <form action="">
            <div className="login-box-mobile">
              <h2>Faça Login</h2>
              <div className="input" style={{ marginBottom: -20 }}>
                <label htmlFor="email">Login E-mail</label>
                <input type="text" placeholder="email@mail.com" />
              </div>
              <div className="input">
                <label htmlFor="email">Senha</label>
                <input type="password" placeholder="senha" />
              </div>
            </div>
          </form>
        </div>
        <div
          style={{ backgroundImage: "url(" + AssinanteBG + ")" }}
          className="content-mobile"
        >
          <div className="btn-group-mobile">
            <div className="button-box-mobile">
              <div className="button">
                <i class="fas fa-barcode"></i>
              </div>
              <span>2° via de boleto</span>
            </div>

            <div className="button-box-mobile">
              <div className="button">
                <i class="fas fa-box-open"></i>
              </div>
              <span>
                <p>Informações</p> sobre seu plano
              </span>
            </div>
          </div>
          <div className="texts">
            <p>
              Pra estar com um a Ultra, um cliente precisa estar satisfeito de
              todas as formas possíveis. Independetemente da empresa que você
              utiliza hoje, não aceite menos que isso. Somos rápidos. Somos
              dinâmicos. Somos ultra, por isso oferecemos adesão sem fidelidade.
              Para saber mais, entre em contato coma ultra.
            </p>
          </div>
          <a>
            <div className="wpp-button-mobile">
              <i class="fab fa-whatsapp"></i>
              <div>
                <span className="title">Whatsapp</span>
                <span className="cel">(34) 1234 5678</span>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Subscriber;
