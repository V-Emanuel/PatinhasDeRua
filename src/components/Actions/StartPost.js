import { styled } from "styled-components";

export const StartPostContent = styled.div`
  width: 510px;
  height: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: #f28a49;
  padding: 55px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  left: 0px;
  h1 {
    width: 100%;
    display: flex;
    justify-content: center;
    line-height: 18px;
    color: #2c1913;
    line-height: normal;
    font-family: "Teko";
    font-weight: 300;
    font-size: 50px;
  }
`;
export const StartPost = styled.img`
  width: 400px;
  margin-top: 20px;
  border-style: double;
  border-color: #2c1913;
  border-width: 10px;
`;
