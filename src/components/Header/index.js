import React from "react";
import { Link } from "react-router-dom";
import { Container, Center, Logo, MenuItem, LogoBox } from "./styles";
import LogoImage from "../../assets/logo.png";

const Header = () => {
  return (
    <Container>
      <Center>
        <LogoBox>
          <Link to="/">
            <Logo src={LogoImage} />
          </Link>
        </LogoBox>
        <ul>
          <Link to="/">
            <MenuItem>home</MenuItem>
          </Link>
          <a href="">
            <MenuItem>somos ultra</MenuItem>
          </a>
          <a href="">
            <MenuItem>planos ultra</MenuItem>
          </a>
          <Link to="/subscriber">
            <MenuItem>área do assinante</MenuItem>
          </Link>
          <Link to="/contact">
            <MenuItem>Ouvidoria</MenuItem>
          </Link>
        </ul>
      </Center>
    </Container>
  );
};

export default Header;
