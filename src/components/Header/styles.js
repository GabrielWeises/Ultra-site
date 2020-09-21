import styled from "styled-components";

export const Container = styled.header`
  height: 60px;
  font-family: "Montserrat", sans-serif;

  .icon a {
    color: #fff;
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
export const Center = styled.div`
  max-width: 1000px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  ul {
    display: flex;
  }
`;
export const LogoBox = styled.div`
  height: 20px;
  width: 120px;
  margin-right: 40px;
`;
export const Logo = styled.img`
  width: 100%;
  height: 100%;
`;
export const MenuItem = styled.li`
  text-transform: uppercase;
  padding: 5px;
  color: black;
  font-weight: 600;
  font-size: 14px;
  margin: 0 15px;
`;
