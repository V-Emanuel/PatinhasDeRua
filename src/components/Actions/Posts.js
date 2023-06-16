import { styled } from "styled-components";

export const Posts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .post {
    width: 450px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 50px;
    margin-top: 40px;
    img {
      width: 80%;
      filter: brightness(130%);
    }
    h4 {
      font-family: "Caveat";
      line-height: normal;
      text-align: center;
      font-weight: 500;
      font-size: 30px;
      margin-top: 10px;
      color: #fff;
    }
  }
`;
