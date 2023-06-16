import { styled } from "styled-components";

const ActionsSection = styled.section`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  background-color: #000;
  padding-left: 400px;
  padding-right: 120px;
  box-sizing: border-box;
  h2 {
    line-height: 18px;
    color: #fff;
    line-height: normal;
    font-family: "Teko";
    font-weight: 300;
    font-size: 60px;
    margin-top: 40px;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
  }
`;

export default ActionsSection;
