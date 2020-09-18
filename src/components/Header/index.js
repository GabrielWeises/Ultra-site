import React, { useEffect, useState } from "react";
import { ScrollTo } from "react-scroll-to";
import { Link } from "react-router-dom";
import { Container, Center, Logo, MenuItem, LogoBox } from "./styles";
import LogoImage from "../../assets/logo.png";
import "./mobile.css";

const Header = ({ ref1 }) => {
  const [toggle, setToggle] = useState("");
  const [menu, setMenu] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    setMenu(document.querySelector(".menu"));
    setToggle(document.querySelector(".toggle"));
    setItems(document.querySelectorAll(".item"));
  }, []);

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

  return (
    <Container>
      <div className="desktop">
        <Center>
          <LogoBox>
            <Link to="/">
              <Logo src={LogoImage} />
            </Link>
          </LogoBox>
          <ul>
            <Link to="/">
              <MenuItem className="item">home</MenuItem>
            </Link>
            <a onClick={SmoothScroll1}>
              <MenuItem className="item">somos ultra</MenuItem>
            </a>
            <a onClick={SmoothScroll2}>
              <MenuItem className="item">planos ultra</MenuItem>
            </a>
            <Link to="/subscriber">
              <MenuItem className="item">área do assinante</MenuItem>
            </Link>
            <Link to="/contact">
              <MenuItem className="item">Ouvidoria</MenuItem>
            </Link>
          </ul>
        </Center>
      </div>
      <div className="mobile">
        <div className="menu-mobile">
          <LogoBox>
            <Link to="/">
              <Logo src={LogoImage} />
            </Link>
          </LogoBox>
          <div className="icon-box">
            <span>Menu</span>
            <div onClick={toggleMenu} className="icon toggle">
              <a href="#">
                <i class="fas fa-bars"></i>
              </a>
            </div>
          </div>
        </div>
        <nav>
          <ul className="menu">
            <Link to="/">
              <MenuItem className="item">home</MenuItem>
            </Link>
            <a onClick={SmoothScroll1}>
              <MenuItem className="item">somos ultra</MenuItem>
            </a>
            <a onClick={SmoothScroll2}>
              <MenuItem className="item">planos ultra</MenuItem>
            </a>
            <Link to="/subscriber">
              <MenuItem className="item">área do assinante</MenuItem>
            </Link>
            <Link to="/contact">
              <MenuItem className="item">Ouvidoria</MenuItem>
            </Link>
          </ul>
        </nav>
      </div>
    </Container>
  );
};

export default Header;
