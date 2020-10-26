import React, { SetStateAction } from "react";
import styled from "styled-components";
import Input from "../../Components/Input";
import { UseInputIterface } from "../../Utils/UseInputInterface";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 70px;
`;

const Form = styled.form`
  width: 350px;
  border: ${(props) => props.theme.border};
  padding: 35px;
`;

const Title = styled.div`
  margin: 15px 0;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.9;
  color: ${(props) => props.theme.orangeColor};
`;

const Button = styled.button`
  margin-top: 20px;
  background-color: ${(props) => props.theme.deppOrangeColor};
  width: 100%;
  font-weight: 700;
  opacity: 0.9;
  padding: 10px;
  color: white;
  font-size: 14px;
`;

const MessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  font-size: 13px;
  text-align: center;
  opacity: 0.6;
`;

const Message = styled.div``;

const AuthState = styled.div`
  margin-left: 10px;
  color: ${(props) => props.theme.deppOrangeColor};
  cursor: pointer;
  text-decoration: underline;
`;

interface IProps {
  email: UseInputIterface;
  password: UseInputIterface;
  confirmPassword: UseInputIterface;
  username: UseInputIterface;
  action: string;
  setAction: React.Dispatch<SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<Element>) => void;
}

const AuthPresenter: React.FC<IProps> = ({
  email,
  password,
  confirmPassword,
  username,
  action,
  setAction,
  onSubmit,
}) => (
  <Container>
    {action === "LogIn" ? (
      <Form onSubmit={onSubmit}>
        <Title>이메일</Title>
        <Input
          type={"email"}
          value={email.value}
          onChange={email.onChange}
        ></Input>
        <Title>비밀번호</Title>
        <Input
          type={"password"}
          value={password.value}
          onChange={password.onChange}
        ></Input>
        <Button>로그인</Button>
        <MessageWrapper>
          <Message>아직 계정이 없으신가요?</Message>
          <AuthState onClick={() => setAction("SignUp")}>회원가입</AuthState>
        </MessageWrapper>
      </Form>
    ) : (
      <Form onSubmit={onSubmit}>
        <Title>닉네임</Title>
        <Input value={username.value} onChange={username.onChange}></Input>
        <Title>이메일</Title>
        <Input
          type={"email"}
          value={email.value}
          onChange={email.onChange}
        ></Input>
        <Title>비밀번호</Title>
        <Input
          type={"password"}
          value={password.value}
          onChange={password.onChange}
        ></Input>
        <Title>비민번호 확인</Title>
        <Input
          type={"password"}
          value={confirmPassword.value}
          onChange={confirmPassword.onChange}
        ></Input>
        <Button>회원가입</Button>
        <MessageWrapper>
          <Message>이미 계정이 있으신가요?</Message>
          <AuthState onClick={() => setAction("LogIn")}>회원가입</AuthState>
        </MessageWrapper>
      </Form>
    )}
  </Container>
);

export default AuthPresenter;
