import React from "react";

import { Container, Banner, Center } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Background from "../../assets/foto3.jpg";
import BackgroundMobile from "../../assets/foto3-mobile.png";
import "./mobile.css";

const Ombudsman = () => {
  return (
    <Container>
      <Header />
      <div className="desktop">
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
                    <span className="cel">(34) 3616-1900</span>
                  </div>
                  <i class="fas fa-tools"></i>
                </div>
              </a>
              <a className="margin-left">
                <div className="button ">
                  <i class="fab fa-whatsapp"></i>
                  <div>
                    <p className="title">Whatsapp</p>
                    <p className="title">Comercial</p>
                    <span className="cel">(34) 3616-1900</span>
                  </div>
                  <i class="fas fa-shopping-cart"></i>
                </div>
              </a>
            </div>
            <div className="box2">
              <a className="margin-top">
                <div className="button ">
                  <i class="far fa-envelope"></i>
                  <div>
                    <p className="title">Criticas e Sugestões</p>

                    <span className="cel">contato@ultrainternet.com.br</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="media-group">
              <a>
                <div className="button-case">
                  <div className="media-button">
                    <i class="fab fa-facebook-f"></i>
                  </div>
                  <span>facebook</span>
                </div>
              </a>
              <a className="margin-left">
                <div className="button-case ">
                  <div className="media-button">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <span>instagram</span>
                </div>
              </a>
            </div>
          </Center>
        </Banner>
      </div>
      <div className="mobile">
        <div
          style={{ backgroundImage: "url(" + BackgroundMobile + ")" }}
          className="banner-mobile"
        >
          <div className="header-mobile">
            <p className="title">Ouvidoria</p>
            <p className="sub-title">Ouvidoria:</p>
          </div>
          <a>
            <div className="button-mobile">
              <i class="fab fa-whatsapp"></i>
              <div>
                <p className="title">Whatsapp</p>
                <p className="title">Suporte</p>
                <span className="cel">(34) 3616-1900</span>
              </div>
              <i class="fas fa-tools"></i>
            </div>
          </a>
          <a>
            <div className="button-mobile">
              <i class="fab fa-whatsapp"></i>
              <div>
                <p className="title">Whatsapp</p>
                <p className="title">Comercial</p>
                <span className="cel">(34) 3616-1900</span>
              </div>
              <i class="fas fa-shopping-cart"></i>
            </div>
          </a>
          <a>
            <div className="button-mobile">
              <i class="far fa-envelope"></i>
              <div>
                <p className="title">Criticas e Sugestões</p>
                <span className="cel">contato@ultrainternet.com.br</span>
              </div>
            </div>
          </a>
          <div className="media-group-mobile">
            <a>
              <div className="button-mobile-case">
                <div className="media-button">
                  <i class="fab fa-facebook-f"></i>
                </div>
                <span>facebook</span>
              </div>
            </a>
            <a>
              <div className="button-mobile-case">
                <div className="media-button">
                  <i class="fab fa-instagram"></i>
                </div>
                <span>instagram</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Ombudsman;
