import styled from "styled-components";

export const Container = styled.div`
  background: #ff6c00;

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
    background: #ff6c00;
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
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
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
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
    text-align: right;
  }

  .body {
    display: flex;
    justify-content: flex-end;
    z-index: 4;
  }
`;
