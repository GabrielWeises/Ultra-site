import React, { useEffect, useState } from "react";
import { ScrollTo } from "react-scroll-to";
import { Link } from "react-router-dom";
import { Container, Center, Logo, MenuItem, LogoBox } from "./styles";
import LogoImage from "../../assets/logo.png";
import "./mobile.css";

const Header = ({ ref1 }) => {
  const [toggle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  document.addEventListener("click", closeSubmenu, false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(document.querySelectorAll(".item"));
  }, []);

  useEffect(() => {
    setMenu(document.querySelector(".menu"));
    setToggle(document.querySelector(".toggle"));

    for (let item of items) {
      if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
      }
    }
  }, [items]);

  function closeSubmenu(e) {
    let isClickInside = document.querySelector(".menu").contains(e.target);

    if (!isClickInside && document.querySelector(".submenu-active")) {
      document
        .querySelector(".submenu-active")
        .classList.remove("submenu-active");
    }
  }

  function SmoothScroll2() {
    const section2 = document.querySelector("#section2");
    const section2Mobile = document.querySelector("#section2-mobile");

    section2.scrollIntoView({ behavior: "smooth" });
    section2Mobile.scrollIntoView({ behavior: "smooth" });

    toggleMenu();
  }
  function SmoothScroll1() {
    const section1 = document.querySelector("#section1");
    const section1Mobile = document.querySelector("#section1-mobile");

    section1.scrollIntoView({ behavior: "smooth" });
    section1Mobile.scrollIntoView({ behavior: "smooth" });

    toggleMenu();
  }

  const toggleMenu = () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");

      // adds the menu (hamburger) icon
      toggle.querySelector("a").innerHTML = '<i class="fas fa-bars"></i>';
    } else {
      menu.classList.add("active");

      // adds the close (x) icon
      toggle.querySelector("a").innerHTML = '<i class="fas fa-times"></i>';
    }
  };

  function toggleItem() {
    if (this.classList.contains("submenu-active")) {
      this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
      this.classList.add("submenu-active");
    } else {
      this.classList.add("submenu-active");
    }
  }

  return (
    <Container>
      <nav>
        <ul class="menu">
          <li class="logo">
            <img src={LogoImage} alt="Logo" />
          </li>
          <li class="item">
            <Link to="/">Home</Link>
          </li>
          <li class="item">
            <a href="#">somos ultra</a>
          </li>
          <li class="item">
            <a href="#">planos ultra</a>
          </li>
          <li class="item">
            <Link to="/subscriber">área do assinante</Link>
          </li>
          <li class="item has-submenu">
            <a tabindex="0">
              contato <i class="fas fa-chevron-down"></i>
            </a>
            <ul class="submenu">
              <li class="subitem">
                <Link to="/contact">colaborador</Link>
              </li>
              <li class="subitem">
                <Link to="/ombudsman">ouvidoria</Link>
              </li>
            </ul>
          </li>

          <li class="toggle">
            <a onClick={toggleMenu} href="#">
              <i class="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
