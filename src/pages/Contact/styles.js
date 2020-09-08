import styled from "styled-components";

export const Container = styled.div`
  .form {
    margin-bottom: -100px;
    position: relative;
    background-size: cover;

    .body {
      font-family: "Work Sans", sans-serif;
      .middle {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
      }

      input {
        padding: 5px 16px;
        color: #666;
        font-family: "Work Sans", sans-serif;
        border: none;
        border-bottom: 2px solid #595959;
        background: transparent;
        height: 40px;
      }

      .button {
        display: Flex;
      }
      button {
        background: #ff6c00;
        font-family: "Work Sans", sans-serif;
        font-size: 12px;
        margin: 20px 0;
        margin-left: auto;
        outline: 0;
        border: 0;
        height: 50px;
        width: 120px;
        border-radius: 25px;
        color: #fff;
      }

      .form-1 label,
      .form-2 label {
        color: #010927;
      }
      .form-1 {
        display: flex;
        margin-top: 40px;
        justify-content: center;

        .ast {
          color: red;
          font-weight: bold;
        }

        .input {
          display: flex;
          flex-direction: column;
          margin: 0 20px;
        }
      }

      .form-2 {
        display: flex;
        margin-top: 40px;
        flex-direction: column;
      }
    }

    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        color: #fff;
        font-size: 84pt;
        font-weight: 600;
        font-family: "Montserrat", sans-serif;
      }

      .sub-title {
        font-family: "Segoe UI", sans-serif;
        font-weight: bold;
        color: #012718;
        font-size: 31pt;
        margin-top: -50px;
      }
    }
  }
`;
export const Banner = styled.div`
  background-size: cover;
  padding-bottom: 90px;
`;
export const Center = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  .media-group {
    display: flex;
  }

  .box-1 {
    display: flex;
  }

  .button-case {
    display: flex;
    text-align: center;
    width: 100px;
    flex-direction: column;
    margin-top: 45px;

    span {
      color: #fff;
      font-weight: 600;
      font-size: 12px;
      margin-top: 10px;
      text-transform: uppercase;
      font-family: "Montserrat", sans-serif;
    }

    .media-button {
      border: 2px solid #4deed7;
      border-radius: 8px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;

      i {
        color: #fff;
        font-size: 50px;
      }
    }
  }

  .margin-top {
    margin-top: 45px;
  }
  .margin-left {
    margin-left: 30px;
  }
  .header {
    margin-bottom: 50px;
    .title {
      color: #d7fff6;
      font-size: 84pt;
      font-weight: 600;
      font-family: "Montserrat", sans-serif;
    }

    .sub-title {
      font-family: "Segoe UI", sans-serif;
      font-weight: bold;
      color: #2c2c2c;
      font-size: 40px;
      margin-top: -50px;
      margin-left: 8px;
    }
  }

  .button {
    display: flex;
    border: 2px solid #4deed7;
    width: 240px;
    align-items: center;
    padding: 10px 20px;
    border-radius: 15px;

    div {
      min-width: 100px;
      display: flex;
      flex-direction: column;
      margin: 0 10px;

      p {
        font-family: "Segoe UI", sans-serif;
        font-weight: bold;
        color: #fff;
        font-size: 14px;
      }

      span {
        font-family: "Work Sans", sans-serif;
        color: #fff;
        font-size: 14px;
      }
    }

    i {
      font-size: 40px;
      color: #fff;
      font-weight: bold;
    }
  }
`;
