import React from "react";
import styled from "styled-components";
import bg_1 from './image/bg_1.png'

const AuthTemplateBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: url(${bg_1});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/* 흰색 박스 */
const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0px 0px 8px rgba(255, 255, 255, 0.4),
    0px 0px 8px rgba(255, 255, 255, 0.4);
  padding: 2rem;
  width: 500px;
  height:500px;
  background: rgba(0,0,0,0.2);
  border-radius: 10px;
`;

const AuthTemplate = ({ children }) => {
    return (
      <AuthTemplateBlock>
        <WhiteBox>
          <div className="logo-area">
            HI HI
          </div>
          {children}
        </WhiteBox>
      </AuthTemplateBlock>
    );
  };

export default AuthTemplate;
