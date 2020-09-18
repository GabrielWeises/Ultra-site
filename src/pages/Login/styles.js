import styled from "styled-components";

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  padding: 0 30px;
  flex-direction: column;

  img {
    width: 100%;
    max-width: 300px;
    margin-bottom: 20px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 500px;
  max-width: 500px;
  width: 100%;
  background: #fff;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 4px 5px #ddd;
  border: 1px solid #ff6d00;

  p {
    font-size: 30px;
  }

  .body {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
  }
  input[type="text"],
  input[type="password"] {
    height: 40px;
  }
  input {
    margin: 10px;
    padding: 8px 16px;
    border: 1px solid #ff6d00;
    background: #eee;
    border-radius: 5px;
  }
  input[type="submit"] {
    color: #fff;
    background: #ff6d00;
    cursor: pointer;
  }
`;
