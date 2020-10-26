/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "../Assets/logo.png";

const BlinkEffect = keyframes`
0%  {
    opacity:0.6; 
    }
50% {
  opacity:1;
    }
100%{
    opacity:0.6; 
    }
`;

const Banner = styled.div`
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: ${(props) => props.theme.orangeColor};
  color: white;
  opacity: 1;
  font-weight: 700;
  letter-spacing: 5px;
  font-family: "맑은 고딕";
  animation: ${BlinkEffect} 1.2s infinite;
`;

const Imoji = styled.span``;

const Header = styled.div`
  height: 100px;
  opacity: 0.9;
  padding: 0 100px;
  border-bottom: ${(props) => props.theme.border};
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Spacer = styled.div``;

const Logo = styled.div`
  height: 30px;
  width: 200px;
  background-image: url(${logo});
  background-size: cover;
`;

const LoginBtn = styled.button`
  background-color: inherit;
  border: ${(props) => props.theme.border};
`;

export default () => (
  <>
    <Banner>
      <Imoji role="img" aria-label="smile">
        😊
      </Imoji>
      김영훈 kimyh03@gmail.com
      <Imoji role="img" aria-label="smile">
        😘
      </Imoji>
    </Banner>
    <Header>
      <Spacer />
      <a href={"/"}>
        <Logo></Logo>
      </a>
      <a href={"/auth"}>
        <LoginBtn>로그인</LoginBtn>
      </a>
    </Header>
  </>
);
