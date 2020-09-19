import styled, { css } from "styled-components";

export const SectionWrapper = styled.div`
  position: relative;
  .title {
    padding-right: 90px;
    box-sizing: border-box;
    padding: 0px 0px 10px;
    color: #2f2f33;
    display: block;
    font-size: 18px;
    margin: 0;
    position: relative;
    font-weight: 500;
    font-family: "Nunito";
    text-align: left;
    border-bottom: 1px solid #f7f7f7;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      width: 90%;
      height: 1px;
      background: #ccc;
      bottom: -1px;
    }
  }
  .right-all {
    position: absolute;
    right: 0px;
    top: 8px;
    .link {
      text-decoration: none;
      color: #7b7b7b;
    }
  }
`;
