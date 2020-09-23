import React, { useRef, useEffect } from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Container, Slide, Center, Box, Content, Prices } from "./styles";
import Background from "../../assets/bg.png";
import Basic from "../../assets/plano-basic.png";
import Light from "../../assets/plano-light.png";
import Premium from "../../assets/plano-premium.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./mobile.css";

const Home = () => {
  return (
    <Container id="home">
      <Header></Header>
      <div className="desktop">
        <Slide>
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={500}
            showIndicators={false}
          >
            <div>
              <img src={require("../../assets/foto1.jpg")} />
            </div>
            <div>
              <img src={require("../../assets/foto1.jpg")} />
            </div>
          </Carousel>
          <button>
            <span className="title">CLIQUE AQUI</span>
            <br />
            <span className="sub-title">FAÇA SEU PRÉ-CADASTRO DE CLIENTE</span>
          </button>
        </Slide>
        <Center>
          <div id="section1" className="header">
            <span className="title">Apresentação</span>
            <span className="sub-title">Somos Ultra</span>
          </div>
          <Box>
            <div className="box1">
              <span>
                100% made in São Gotardo a Ultra nasceu com o propósito de levar
                você a qualquer lugar que você queira ir. Isso, é claro, através
                de uma internet de qualidade construida a partir de uma
                tecnologia 100% fibra óptica. Nosssa empresa acredita que
                oferecer um serviço de conexão à internet de qualidade vai muito
                além de entregar o necessário, por isso, inovamos o mercado
                regional oferecendo aos nossos clientes planos de internet SEM
                FIDELIDADE
              </span>
            </div>
            <div className="box2">
              <img src={require("../../assets/foguete.png")} />
              <div>
                <span className="title">Satisfação</span>
                <span>
                  Pra estar com a Ultra, um cliente precisa estar satisfeito de
                  todas as formas possíveis, independentemente da empresa que
                  você utiliza hoje, não aceite menos que isso
                </span>
              </div>
            </div>
            <div className="box3">
              <img src={require("../../assets/wifi.png")} />
              <div>
                <span>Somos rápidos</span>
                <br />
                <span>Somos dinâmicos</span>
                <br />
                <span>Somos ultra</span>
              </div>
            </div>
          </Box>
          <div className="body">
            <span className="title-second">UltraInternet</span>
            <span className="sub-title-second">Missão, visão e valores</span>
          </div>
          <Content>
            <img className="man" src={require("../../assets/homem.png")} />
            <div className="container">
              <div className="header">
                <img src={require("../../assets/target.png")} />
                <span>Missão</span>
              </div>
              <span>
                Conectar pessoas através de um serviço de internet de qualidade,
                velocidade e estabilidade.
              </span>
            </div>
            <div className="container">
              <div className="header">
                <img src={require("../../assets/vision.png")} />
                <span>Visão</span>
              </div>
              <span>
                Ganha mercado oferecendo um excelente serviço de internet e
                expandir isso a toda região a médio prazo.
              </span>
            </div>
            <div className="container">
              <div className="header">
                <img src={require("../../assets/star.png")} />
                <span>Valores</span>
              </div>
              <span>
                Qualidade no serviço, exelência no atendimento e perfeição na
                conexão.
              </span>
            </div>
          </Content>
        </Center>
        <div
          style={{ backgroundImage: "url(" + Background + ")" }}
          className="form"
        >
          <div className="header">
            <p className="title">Cliente Ultra</p>
            <p className="sub-title">Seja um cliente Ultra</p>
            <p className="h3">Nós ligamos pra você!</p>
          </div>

          <p className="h4">
            Deixe seus dados que entramos em contato para te apresentar nossas
            soluções em internet fibra óptica
          </p>
          <div className="body">
            <div className="form-1">
              <div style={{ flex: 2, marginRight: 100 }} className="input">
                <label htmlFor="name">
                  NOME<span className="ast">*</span>
                </label>
                <input placeholder="Seu nome" type="text" />
              </div>

              <div style={{ flex: 1 }} className="input">
                <label htmlFor="name">NÚMERO DE TELEFONE</label>
                <input placeholder="(34) 9 9999 9999" type="text" />
              </div>
            </div>

            <div className="button">
              <button type="submit">ENVIO</button>
            </div>
          </div>
        </div>
        <Prices>
          <Center>
            <div id="section2" className="header">
              <p className="title">Planos Ultra</p>
              <p className="sub">Planos Ultra</p>
            </div>
            <div className="text">
              <p>
                Dúvidas aqui, só se for sobre qual o melhor plano para atender
                sua casa ou empresa.
              </p>
              <p>
                Internet de qualidade superior. 100% fibra óptica, assim é a
                Ultra.
              </p>
              <p>Ultra rapidez que só a fibra óptica pode te dar</p>
              <p>Ultra velocidade para assistir videos, séries e filmes.</p>
              <p>Ultra download e upload.</p>
            </div>
            <div className="prices">
              <div className="price-box">
                <div
                  style={{ backgroundImage: "url(" + Light + ")" }}
                  className="price-header"
                >
                  <span className="title">PLANO LIGHT:</span>

                  <span className="price">
                    <sup>R$</sup>99<sup>,00</sup>
                  </span>

                  <span>POR MÊS</span>
                </div>
                <div className="price-body">
                  <ul>
                    <li>Contrate 50MB e leve mais 30MB</li>
                    <li>Instalação em até 48 horas</li>
                    <li>Roteador grátis</li>
                    <li>100% tecnologia fibra óptica</li>
                    <li>Adesão sem fidelidade</li>
                  </ul>
                  <button>SAIBA MAIS</button>
                </div>
              </div>

              <div style={{ margin: "0 40px" }} className="price-box">
                <div
                  style={{ backgroundImage: "url(" + Basic + ")" }}
                  className="price-header"
                >
                  <span className="title">PLANO BASIC:</span>

                  <span className="price">
                    <sup>R$</sup>149<sup>,00</sup>
                  </span>

                  <span>POR MÊS</span>
                </div>
                <div className="price-body">
                  <ul>
                    <li>Contrate 100MB e leve mais 50MB</li>
                    <li>Instalação em até 48 horas</li>
                    <li>Repetidor de sinal grátis</li>
                    <li>Roteador grátis</li>
                    <li>100% tecnologia fibra óptica</li>
                    <li>Adesão sem fidelidade</li>
                  </ul>
                  <button>SAIBA MAIS</button>
                </div>
              </div>

              <div className="price-box">
                <div
                  style={{ backgroundImage: "url(" + Premium + ")" }}
                  className="price-header"
                >
                  <span className="title">PLANO PREMIUM:</span>

                  <span className="price">
                    <sup>R$</sup>199<sup>,00</sup>
                  </span>

                  <span>POR MÊS</span>
                </div>
                <div className="price-body">
                  <ul>
                    <li>Contrate 200MB e leve mais 100MB</li>
                    <li>Instalação em até 48 horas</li>
                    <li>Roteador grátis</li>
                    <li>100% tecnologia fibra óptica</li>
                    <li>Adesão sem fidelidade</li>
                  </ul>
                  <button>SAIBA MAIS</button>
                </div>
              </div>
            </div>
          </Center>
        </Prices>
      </div>
      <div id="home-mobile" className="mobile">
        <div className="slide">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            transitionTime={500}
            showIndicators={false}
          >
            <div>
              <img src={require("../../assets/foto1-mobile.png")} />
            </div>
            <div>
              <img src={require("../../assets/foto1-mobile.png")} />
            </div>
          </Carousel>
          <button className="button">
            <span className="title">CLIQUE AQUI</span>
            <span className="sub-title">FAÇA SEU PRÉ-CADASTRO DE CLIENTE</span>
          </button>
        </div>
        <div className="info">
          <div id="section1-mobile" className="header-mobile">
            <p className="title">Apresentação</p>
            <p className="sub-title">Somos Ultra</p>
          </div>
          <div className="infos">
            <div className="info-1">
              <p>
                100% made in São Gotardo a Ultra nasceu com o propósito de levar
                você a qualquer lugar que você queira ir. Isso, é claro, através
                de uma internet de qualidade construida a partir de uma
                tecnologia 100% fibra óptica. Nosssa empresa acredita que
                oferecer um serviço de conexão à internet de qualidade vai muito
                além de entregar o necessário, por isso, inovamos o mercado
                regional oferecendo aos nossos clientes planos de internet SEM
                FIDELIDADE
              </p>
            </div>
            <div className="info-2">
              <img src={require("../../assets/foguete.png")} />
              <div className="aside-info">
                <p className="title">Satisfação</p>
                <p>
                  Pra estar com a Ultra, um cliente precisa estar satisfeito de
                  todas as formas possíveis, independentemente da empresa que
                  você utiliza hoje, não aceite menos que isso
                </p>
              </div>
            </div>
            <div className="info-3">
              <img src={require("../../assets/wifi.png")} />
              <div>
                <span>Somos rápidos</span>
                <br />
                <span>Somos dinâmicos</span>
                <br />
                <span>Somos ultra</span>
              </div>
            </div>
          </div>
          <section>
            <div className="header-mobile">
              <p className="title">UltraInternet</p>
              <p className="sub-title">Missão, visão e valores</p>
            </div>
            <img
              className="man-mobile"
              src={require("../../assets/homem.png")}
            />
            <div className="item">
              <div className="header-item">
                <img src={require("../../assets/target.png")} />
                <span>Missão</span>
              </div>
              <span>
                Conectar pessoas através de um serviço de internet de qualidade,
                velocidade e estabilidade.
              </span>
            </div>
            <div className="item">
              <div className="header-item">
                <img src={require("../../assets/vision.png")} />
                <span>Visão</span>
              </div>
              <span>
                Ganha mercado oferecendo um excelente serviço de internet e
                expandir isso a toda região a médio prazo.
              </span>
            </div>
            <div className="item">
              <div className="header-item">
                <img src={require("../../assets/star.png")} />
                <span>Valores</span>
              </div>
              <span>
                Qualidade no serviço, exelência no atendimento e perfeição na
                conexão.
              </span>
            </div>
          </section>
        </div>
        <div
          style={{ backgroundImage: "url(" + Background + ")" }}
          className="form-mobile"
        >
          <div className="header">
            <p className="title">Cliente Ultra</p>
            <p className="sub-title">Seja um cliente Ultra</p>
          </div>
          <p className="h3">Nós ligamos pra você!</p>
          <p className="h4">
            Deixe seus dados que entramos em contato para te apresentar nossas
            soluções em internet fibra óptica
          </p>
          <div className="input">
            <label htmlFor="name">
              NOME<span className="ast"> *</span>
            </label>
            <input id="name" placeholder="Seu nome" type="text" />
          </div>

          <div className="input">
            <label htmlFor="number">
              número de telefone<span className="ast"> *</span>
            </label>
            <input id="number" placeholder="(34) 9 9999 9999" type="text" />
          </div>

          <div className="submit">
            <button type="submit">ENVIO</button>
          </div>
        </div>
        <div className="prices-mobile">
          <div id="section2-mobile" className="header-mobile">
            <p className="title">Planos Ultra</p>
            <p className="sub-title">Planos Ultra</p>
          </div>
          <div className="text">
            <p>
              Dúvidas aqui, só se for sobre qual o melhor plano para atender sua
              casa ou empresa. Internet de qualidade superior. 100% fibra
              óptica, assim é a Ultra.
            </p>
            <p>
              Ultra rapidez que só a fibra óptica pode te dar. Ultra velocidade
              para assistir videos, séries e filmes. Ultra download e upload.
            </p>
          </div>
          <div className="price-box">
            <div
              style={{ backgroundImage: "url(" + Light + ")" }}
              className="price-header"
            >
              <span className="title">PLANO LIGHT:</span>

              <span className="price">
                <sup>R$</sup>99<sup>,00</sup>
              </span>

              <span>POR MÊS</span>
            </div>
            <div className="price-body">
              <ul>
                <li>Contrate 50MB e leve mais 30MB</li>
                <li>Instalação em até 48 horas</li>
                <li>Roteador grátis</li>
                <li>100% tecnologia fibra óptica</li>
                <li>Adesão sem fidelidade</li>
              </ul>
              <button>SAIBA MAIS</button>
            </div>
          </div>
          <div className="price-box">
            <div
              style={{ backgroundImage: "url(" + Basic + ")" }}
              className="price-header"
            >
              <span className="title">PLANO BASIC:</span>

              <span className="price">
                <sup>R$</sup>149<sup>,00</sup>
              </span>

              <span>POR MÊS</span>
            </div>
            <div className="price-body">
              <ul>
                <li>Contrate 100MB e leve mais 50MB</li>
                <li>Instalação em até 48 horas</li>
                <li>Repetidor de sinal grátis</li>
                <li>Roteador grátis</li>
                <li>100% tecnologia fibra óptica</li>
                <li>Adesão sem fidelidade</li>
              </ul>
              <button>SAIBA MAIS</button>
            </div>
          </div>

          <div className="price-box">
            <div
              style={{ backgroundImage: "url(" + Premium + ")" }}
              className="price-header"
            >
              <span className="title">PLANO PREMIUM:</span>

              <span className="price">
                <sup>R$</sup>199<sup>,00</sup>
              </span>

              <span>POR MÊS</span>
            </div>
            <div className="price-body">
              <ul>
                <li>Contrate 200MB e leve mais 100MB</li>
                <li>Instalação em até 48 horas</li>
                <li>Roteador grátis</li>
                <li>100% tecnologia fibra óptica</li>
                <li>Adesão sem fidelidade</li>
              </ul>
              <button>SAIBA MAIS</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
