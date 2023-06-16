import styled from "styled-components";
import dogBag from "../../assets/imgs/dogBag.jpg";

export const Section1 = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: radial-gradient(
      circle at 62% 34%,
      rgba(0, 0, 0, 0) 7%,
      rgba(0, 0, 0, 0.2) 30%,
      rgba(0, 0, 0, 0.6) 45%,
      rgba(0, 0, 0, 0.9) 80%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.7) 5%, rgba(0, 0, 0, 0) 15%),
    url(${dogBag});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const OngName = styled.div`
  position: absolute;
  display: flex;
  height: max-content;
  align-items: flex-start;
  flex-direction: column;
  top: 30%;
  left: 5%;
  h1,
  h2 {
    line-height: 18px;
    color: #fff;
  }
  h1 {
    font-size: 5.2vw;
    font-family: "Emilys Candy";
    font-weight: 400;
  }
  h2 {
    margin-top: 50px;
    font-size: 18px;
    font-family: "Roboto";
    line-height: normal;
    text-align: justify;
    font-weight: 500;
    width: 600px;
  }
`;
