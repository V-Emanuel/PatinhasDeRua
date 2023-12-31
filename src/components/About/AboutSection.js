import styled from "styled-components";

const AboutSection = styled.section`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  box-sizing: border-box;
  span {
    width: 75%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    p,
    h1 {
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
  }
`;

export default AboutSection;
