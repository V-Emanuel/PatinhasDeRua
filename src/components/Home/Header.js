import { styled } from "styled-components";

export const Header = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 65px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 35px 0px 20px;
  background-color: transparent;
  span {
    display: flex;
    align-items: center;
  }
`;
export const HeaderText = styled.h3`
  font-style: normal;
  line-height: 20px;
  color: #fff;
  font-size: 20px;
  font-family: "Open Sans";
  font-weight: 800;
  padding: 4px;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    color: #14100b;
    background-color: #fff;
    transition: 500ms;
  }
  &:not(:hover) {
    transition: 500ms;
  }
`;
