import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Form } from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Link to="/">
        <img src={require("../../assets/logo.png")} alt="" />
      </Link>
      <Form onSubmit={handleSubmit}>
        <div className="header">
          <p className="h1">Login</p>
        </div>
        <div className="body">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Usuário"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
        </div>
        <input type="submit" value="Entrar" />
      </Form>
    </Container>
  );
};

export default Login;
