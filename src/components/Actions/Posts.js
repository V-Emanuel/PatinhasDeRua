import { styled } from "styled-components";

export const Posts = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .post {
    width: 320px;
    height: 460px;
    margin-right: 50px;
    img {
      width: 100%;
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
