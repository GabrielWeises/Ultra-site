import React from "react";

import { Container, Center } from "./styles";

const Footer = () => {
  function SmoothScroll() {
    const home = document.querySelector("#home");
    const homeMobile = document.querySelector("#home-mobile");

    home.scrollIntoView({ behavior: "smooth" });
    homeMobile.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <Container>
      <div onClick={SmoothScroll} className="icon">
        ^
      </div>
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
                <a
                  href="https://www.facebook.com/ultrainternetoficial"
                  target="_blank"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/ultrainternetoficial/"
                  target="_blank"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2>Contato</h2>
            <p>Avenida Brasil 865 </p>
            <p>Santa Terezinha</p>
            <p>São Gotardo MG 38800-000</p>
            <ul className="contact-list">
              <li>
                <i class="fas fa-map-marker-alt"></i>São Gotardo
              </li>
              <li>
                <i class="fas fa-phone-alt"></i>34 3616-1900
              </li>
              <li>
                <i class="fas fa-at"></i>contato@ultrainternet.com.br
              </li>
            </ul>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.979514976414!2d-46.06032508509495!3d-19.326695186944583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b219e07aacff39%3A0xd25fdfb1177248c3!2sAv.%20Brasil%2C%20865%20-%20Santa%20Terezinha%2C%20S%C3%A3o%20Gotardo%20-%20MG%2C%2038800-000!5e0!3m2!1spt-BR!2sbr!4v1600747403087!5m2!1spt-BR!2sbr"
              frameborder="0"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
        <div className="copy-right">
          <p>Desenvolvido por Agência Dom Quixote</p>{" "}
          <p className="second">
            &copy; 2020 - Ultra Internet - Todos os Direitos Reservados
          </p>
        </div>
      </Center>
    </Container>
  );
};

export default Footer;
