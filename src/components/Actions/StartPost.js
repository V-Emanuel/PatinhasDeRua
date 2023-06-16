import { styled } from "styled-components";

export const StartPostContent = styled.div`
  width: 560px;
  height: 100%;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  background-color: #8ca38b;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2,
  h1 {
    line-height: 18px;
    color: #2c1913;
    line-height: normal;
  }
  h1 {
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
