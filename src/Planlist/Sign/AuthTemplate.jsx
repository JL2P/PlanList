import React from "react";
import styled from "styled-components";
import bg_1 from "./image/bg_1.png";
import { Header } from "semantic-ui-react";

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  // background-image: url(${bg_1});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 10;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1.5px;
  }
  box-shadow: 0px 0px 28px rgba(230, 144, 73, 0.4),
    0px 0px 28px rgba(230, 144, 73, 0.4);
  padding: 3rem 2rem;
  width: 500px;
  ovarflow: hidden;
  // background: rgba(255, 255, 255, 0);
  background: #ffffff;
  border-radius: 10px;

  @media only screen and (max-width: 767px) {
    width: 95%;
    padding: 2rem 1rem;
  }
`;

const AuthTemplate = ({ children, name }) => {
  return (
    <AuthTemplateBlock>
      <WhiteBox>
        <div className="logo-area">
          <Header style={{ fontSize: "60px" }}>PLAN IT</Header>
          <p>You can {name} to your Planit account here.</p>
        </div>
        {children}
      </WhiteBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;
