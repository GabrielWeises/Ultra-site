import styled from "styled-components";

export const Container = styled.div`
  .content {
    display: flex;
    height: 200px;
    align-items: center;

    .texts {
      width: 500px;
    }

    .wpp-button {
      border-radius: 15px;
      margin: 0;
      margin-left: 40px;
      display: flex;
      align-items: center;
      padding: 10px 35px;
      border: 2px solid #4deed7;

      div {
        display: Flex;
        flex-direction: column;
        justify-content: space-between;
        height: 60px;
        margin-left: 10px;

        .title {
          font-family: "Segoe UI", sans-serif;
          color: #171717;
          font-weight: bold;
          font-size: 18px;
        }
        .cel {
          font-family: "Work Sans", sans-serif;
          color: #2f2f2f;
        }
      }
    }
    p {
      font-family: "Work Sans", sans-serif;
      font-size: 14px;
      line-height: 20px;
      color: #2d3557;
    }
  }
`;
export const Center = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
`;
export const Banner = styled.div`
  display: flex;
  padding-bottom: 40px;
  background: #ff6c00;
  width: 100%;
  background-size: cover;

  .btn-group {
    display: flex;
  }

  .button-box {
    margin: 0 40px;

    .text {
      width: 120px;
      text-align: center;
    }
    span {
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      color: #fff;
      font-size: 14px;
    }
  }

  .button {
    border: 2px solid #4deed7;
    border-radius: 15px;
    height: 90px;
    width: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    i {
      color: #fff;
      font-size: 50pt;
    }
  }

  .title-box {
    font-family: "Segoe UI", sans-serif;
    font-weight: bold;

    h1 {
      font-size: 84px;
      color: #d7fff6;
    }

    h2 {
      color: #010927;
      margin-top: -50px;
      font-size: 30pt;
    }
  }

  .login-box {
    margin-top: 40px;
    background: #fff;
    height: 250px;
    width: 400px;
    display: flex;
    flex-direction: column;
    padding: 0 60px;
    border-radius: 3px;
    justify-content: center;

    h2 {
      font-family: "Segoe UI", sans-serif;
      color: #010927;
      margin-top: -50px;
      font-size: 20pt;
      font-weight: bold;
    }

    label,
    input {
      font-family: "Montserrat", sans-serif;
      color: #7b7878;
    }
    label {
      margin-top: 20px;
      text-transform: uppercase;
      font-size: 13px;
      font-weight: 400;
      color: #010927;
    }
    input {
      border: 0;
      border-bottom: 2px solid #ff6c00;
      padding: 8px 16px;
      background: transparent;
    }
  }
`;
