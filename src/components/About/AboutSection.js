import styled from "styled-components";

const AboutSection = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #000;
  box-sizing: border-box;
  padding: 50px;
  p,
  h1 {
    line-height: 18px;
    color: #fff;
    line-height: normal;
  }
  h1{
    font-family: "Teko";
    font-weight:300;
    font-size: 60px;
  }
  p{
    margin-top: 50px;
    font-size: 24px;
    font-family: "Roboto";
    text-align: center;
    font-weight: 400;
    width: 800px;
  }
`;

export default AboutSection;
