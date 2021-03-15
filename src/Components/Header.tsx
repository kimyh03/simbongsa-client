/* eslint-disable jsx-a11y/accessible-emoji */
import { gql } from "apollo-boost";
import React from "react";
import { useQuery } from "react-apollo";
import styled, { keyframes } from "styled-components";
import logo from "../Assets/logo.png";
import Avatar from "./Avatar";

const BlinkEffect = keyframes`
0%  {
    opacity:0.8; 
    }
50% {
  opacity:1;
    }
100%{
    opacity:0.8; 
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
  animation: ${BlinkEffect} 0.5s infinite;
`;

const Imoji = styled.span``;

const Container = styled.div`
  height: 100px;
  opacity: 0.9;
  padding: 0 100px;
  border-bottom: ${(props) => props.theme.borderBold};
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Spacer = styled.div`
  width: 250px;
`;

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

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Greeting = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-left: 10px;
`;

const Name = styled.div`
  color: ${(props) => props.theme.deppOrangeColor};
  font-weight: 700;
  opacity: 0.7;
  font-size: 17px;
`;

const GET_ME = gql`
  query getMe {
    getMe {      
        id
        username
        avatar
    }
  }
`;

interface IProps {
  isLoggedIn: boolean;
}

const Header: React.FC<IProps> = ({ isLoggedIn }) => {
  const { data, loading } = useQuery(GET_ME);

  return (
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
      <Container>
        <Spacer />
        <a href={"/"}>
          <Logo></Logo>
        </a>
        <Spacer>
          {!loading && isLoggedIn ? (
            <a href={`/profile/${data?.getMe?.id}`}>
              <Profile>
                <Avatar url={data?.getMe?.avatar} />
                <Greeting>
                  <Name>{data?.getMe?.username} </Name> 님 안녕하세요!
                </Greeting>
              </Profile>
            </a>
          ) : (
            <a href={"/auth"}>
              <LoginBtn>로그인</LoginBtn>
            </a>
          )}
        </Spacer>
      </Container>
    </>
  );
};

export default Header;
