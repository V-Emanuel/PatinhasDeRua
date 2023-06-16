import { styled } from "styled-components";

export const FooterSection = styled.section`
  width: 100vw;
  height: 220px;
  display: flex;
  justify-content: space-around;
  padding-left: 30px;
  padding-right: 50px;
  box-sizing: border-box;
  align-items: center;
  background-color: #f28a49;
  span {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    p,
    h5 {
      line-height: 18px;
      color: #000;
    }
    p {
      font-family: "Caveat";
      line-height: normal;
      text-align: center;
      font-weight: 500;
      font-size: 45px;
      margin-bottom: 30px;
    }
    h5 {
      font-family: "Caveat";
      font-weight: 400;
      font-size: 35px;
    }
  }
`;

export const DogFooter = styled.img`
  width: 370px;
`;
