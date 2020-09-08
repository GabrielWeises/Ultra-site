import React from "react";

import { Container, Center } from "./styles";

const Footer = () => {
  return (
    <Container>
      <div className="icon">^</div>
      <Center>
        <div className="footer">
          <div className="social">
            <img src={require("../../assets/logo2.png")} />
            <ul className="text">
              <li>Somos rápidos</li>
              <li>Somos dinâmicos</li>
              <li>Somos ultra</li>
            </ul>
            <ul className="media-social">
              <li>
                <a href="">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-google"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contato</h2>
            <p>Lorem ipsum dolor sit amet,</p>
            <p>consetetur sadipscing eltir, sed diam.</p>
            <ul className="contact-list">
              <li>
                <i class="fas fa-map-marker-alt"></i>São Gotardo
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>+55 34 1234 5678
              </li>
              <li>
                <i class="fas fa-at"></i>email@mail.com
              </li>
            </ul>
          </div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.9183053045581!2d-43.42808581192734!3d-22.88852679905923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf67d8e1a20d%3A0x5c05f69c565ee260!2sR.%20Aritiba%2C%206%20-%20Realengo%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021765-070!5e0!3m2!1spt-BR!2sbr!4v1599440850091!5m2!1spt-BR!2sbr"
              frameborder="0"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div className="copy-right">
          <span>Desenvolvido por Agância Dom Quixote</span>{" "}
          <span className="second">
            &copy; 2020 - Ultra Internet - Todos os Direitos Reservados
          </span>
        </div>
      </Center>
    </Container>
  );
};

export default Footer;
