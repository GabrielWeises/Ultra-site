import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  .form .h3 {
    font-family: "Segoe UI", sans-serif;
    background: #ff6913;
    color: #fff;
    padding: 10px;
    font-size: 22px;
    margin: 10px 0 20px;
    border-radius: 25px;
    font-weight: bold;
  }
  .form .h4 {
    font-family: "Work Sans", sans-serif;
    font-size: 14px;
    margin: 0 20px;
    text-align: center;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .mobile {
      display: flex;
    }
    .desktop {
      display: none;
    }
  }

  .form {
    background-size: cover;
    background-color: #edebec;

    .header {
      display: flex;
      justify-content: center;
      position: relative;
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    .header .title {
      color: #fff;
      font-size: 84pt;
      font-weight: 700;
      font-family: "Montserrat", sans-serif;
    }

    .header .sub-title {
      font-family: "Segoe UI", sans-serif;
      font-weight: bold;
      color: #012718;
      font-size: 30pt;
      margin-top: -50px;
    }

    .body .form-1,
    .form-2 {
      font-family: "Work Sans", sans-serif;
      color: #595959;
      display: flex;
      max-width: 800px;
      margin: 0 auto;
      justify-content: center;
    }
    .body .input {
      display: flex;
      flex-direction: column;
    }

    .form-1 label,
    .form-2 label {
      color: #010927;
    }
    .ast {
      color: red;
      font-weight: bold;
    }
    .input input,
    .form-2 input {
      padding: 5px 16px;
      color: #666;
      font-family: "Work Sans", sans-serif;
      border: none;
      border-bottom: 2px solid #595959;
      background: transparent;
      height: 40px;
    }

    .form-2 {
      display: flex;
      max-width: 800px;
      margin: 0 auto;
      flex-direction: column;
      margin-top: 20px;
    }

    .body .button {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
    }
    .body button {
      background: #ff6d00;
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
  }
`;
export const Center = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  .copy-right {
    padding-bottom: 20px;
    color: #fff;
    font-family: "Work Sans", sans-serif;

    .second {
      margin-left: 100px;
    }
  }

  div {
    position: relative;
    margin-top: 30px;
  }

  .header .title {
    color: #d7fff6;
    font-size: 84pt;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
  }

  .sub-title {
    font-family: "Segoe UI", sans-serif;
    font-weight: bold;
    color: #010927;
    position: absolute;
    font-size: 30pt;
    left: 0;
    bottom: 5px;
  }
  .sub-title-second {
    font-family: "Segoe UI", sans-serif;
    font-weight: bold;
    color: #010927;
    position: absolute;
    font-size: 30pt;
    right: 0;
    bottom: -30px;
    line-height: 40px;
    text-align: right;
    width: 250px;
  }
  .title-second {
    color: #d7fff6;
    font-size: 90pt;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    text-align: right;
  }

  .body {
    display: flex;
    justify-content: flex-end;
    z-index: 4;
  }
`;
export const Slide = styled.div`
  background: #ff6d00;
  width: 100%;
  position: relative;

  button {
    position: absolute;
    bottom: 30px;
    right: 290px;
    background: transparent;
    border: 2px solid #fff;
    padding: 3px 30px;
    border-radius: 50px;
    color: #fff;
    font-family: "Montserrat", sans-serif;

    .title {
      font-weight: bold;
      font-size: 20px;
    }
    .sub-title {
      font-size: 9px;
      font-weight: bold;
    }
  }
`;
export const Box = styled.div`
  display: flex;
  align-items: center;

  .box1 {
    flex: 2;
    margin-right: 10px;
    font-size: 14px;
    color: #37426b;
  }
  .box2 {
    display: flex;
    flex: 2;
    font-size: 15px;

    img {
      min-width: 44px;
      height: 49px;
    }

    .title {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
      font-size: 18px;
      font-family: "Segoe UI", sans-serif;
    }
    div {
      margin-top: -2px;
    }
  }
  .box3 {
    display: flex;
    font-family: "Segoe UI", sans-serif;
    font-weight: bold;
    img {
      min-width: 45px;
      height: 40px;
      margin-right: 20px;
    }

    div {
      margin-top: -3px;
    }
  }
  .box1,
  .box2,
  .box3 {
    height: 200px;
    font-family: "Work Sans", sans-serif;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding-bottom: 40px;

  .container {
    width: 420px;
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
    color: #222;
    padding-bottom: 20px;
    border-bottom: 2px solid #ff6900;
  }
  .header {
    margin-top: 0;
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }

  .header span {
    margin-left: 10px;
    font-weight: bold;
    font-family: "Segoe UI", sans-serif;
    margin-left: 10px;
  }
  img.man {
    position: absolute;
    top: -150px;
    left: -100px;
    z-index: 3;
    width: 600px;
    height: 449px;
  }
`;

export const Prices = styled.div`
  display: flex;

  .prices {
    display: flex;
  }

  .header {
    display: Flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
  }

  .header .sub {
    font-family: "Segoe UI", sans-serif;
    font-weight: bold;
    color: #012718;
    font-size: 32pt;
    margin-top: -50px;
  }

  .text {
    font-family: "Work Sans", sans-serif;
    color: #010927;
    font-size: 14px;
  }
  .prices .price-header {
    background: #ff7a1d;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Montserrat", sans-serif;
    color: #fff;
  }

  .price-header .price {
    font-size: 50px;
    font-weight: bolder;
  }
  .price-header .price sup {
    font-size: 20px;
  }

  .prices .price-body {
    background: #f9f9f9;
    padding: 0 20px;
    box-shadow: 1px 2px #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
    margin: 0;
  }

  .prices .price-body li {
    font-family: "Montserrat", sans-serif;
    color: #7b7878;
    text-align: center;
    margin: 15px 0;
  }

  .prices .price-body button {
    width: 140px;
    background: #ff6d00;
    border: 0;
    font-family: "Work Sans", sans-serif;
    font-size: 12px;
    color: #fff;
    height: 40px;
    border-radius: 10px;
  }
`;

export const Footer = styled.div`
  background: #ff6d00;

  margin-top: 100px;
  position: relative;

  .footer {
    border-bottom: 2px solid #ddd;
    display: flex;
    color: #fff;

    .contact h2 {
      font-family: "Work Sans", sans-serif;
      color: #fff;
      margin-bottom: 30px;
      font-weight: 400;
    }
    .contact p {
      font-family: "Work Sans", sans-serif;
    }

    .contact-list {
      margin-top: 30px;
    }
    .contact-list li {
      margin: 15px 0;
      font-family: "Work Sans", sans-serif;
      font-size: 14px;
    }

    .contact-list i {
      color: #4deed7;
      margin-right: 15px;
    }
  }
  .social,
  .contact,
  .map {
    flex: 1;
    height: 250px;
  }

  .icon {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    background: #ff6d00;
    font-weight: bold;
    color: #fff;
    font-size: 25px;
    padding-bottom: 10px;
    position: absolute;
    left: 50%;
    top: -25px;
    transform: translateX(-50%);
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
  }

  div.social {
    height: 300px;
    display: flex;
    flex-direction: column;

    img {
      width: 200px;
      margin-bottom: 30px;
    }

    ul.text li {
      font-family: "Segoe UI", sans-serif;
      color: #fff;
    }
    ul.media-social {
      display: flex;
      flex-direction: row;
      font-weight: bold;
      margin-top: 40px;
    }
    ul.media-social li {
      background: #4deed7;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 3px;
      width: 30px;
      height: 30px;

      border-radius: 2px;
    }

    a {
      color: #333333;
    }
  }
`;
