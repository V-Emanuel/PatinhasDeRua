import { styled } from "styled-components";

export const HowToHelpSection = styled.section`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #000;
  box-sizing: border-box;
  padding: 80px;
  p,
  h1,
  h3,
  h4 {
    line-height: 18px;
    color: #fff;
    line-height: normal;
  }
  h1 {
    font-family: "Teko";
    font-weight: 300;
    font-size: 60px;
  }
  p {
    margin-top: 50px;
    font-size: 24px;
    font-family: "Roboto";
    text-align: center;
    font-weight: 400;
    width: 800px;
  }
  h3 {
    font-family: "Teko";
    font-weight: 300;
    font-size: 40px;
    margin-top: 20px;
  }
  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 25px;
    ion-icon {
      font-size: 40px;
      margin-right: 20px;
    }
  }
`;
