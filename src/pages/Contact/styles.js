import styled from "styled-components";

export const Container = styled.div`
  .container {
    height: 600px;
    padding: 0;
    display: flex;
    background-size: cover;
    justify-content: flex-end;
  }
  .desktop {
    margin-bottom: -100px;
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
`;

export const Form = styled.form`
  display: flex;
  width: 600px;
  background-size: cover;
  height: 100%;
  background-color: rgba(888, 888, 888, 0.6);
  margin-right: 150px;
  padding-top: 25px;
  flex-direction: column;
  .form {
    padding: 0 50px;
  }

  .button {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
  }
  .button button {
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

  .box1,
  .box2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    /* background: Red; */
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .title {
    color: #fff;
    font-size: 80px;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    line-height: 70px;
  }
  .sub-title {
    font-family: "Segoe UI", sans-serif;
    color: #012718;
    font-size: 42px;
    margin-top: -50px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .input {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 70px;
  }
  .input input {
    padding: 5px 16px;
    color: #666;
    font-family: "Work Sans", sans-serif;
    border: none;
    border-bottom: 2px solid #595959;
    background: transparent;
    height: 40px;
  }

  label {
    font-family: "Work Sans", sans-serif;
    color: #010927 !important;
    font-size: 14px;
  }

  input[type="file"] {
    display: none;
  }

  .upload {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .upload-label {
    background: rgb(212, 213, 217);
    padding: 10px;
    font-size: 14px;
  }
`;
