import React, { useState } from "react";
import UseInput from "../../Hooks/UseInput";
import AuthPresenter from "./Auth.presenter";
import { toast } from "react-toastify";
import { LOCAL_SIGN_IN, SIGN_IN, SIGN_UP } from "./Auth.queries";
import { useMutation } from "react-apollo";

export default () => {
  const [action, setAction] = useState("LogIn");
  const email = UseInput("");
  const password = UseInput("");
  const confirmPassword = UseInput("");
  const username = UseInput("");
  const [signUp] = useMutation(SIGN_UP, {
    variables: {
      email: email.value,
      username: username.value,
      password: password.value,
    },
  });
  const [signIn] = useMutation(SIGN_IN, {
    variables: {
      email: email.value,
      password: password.value,
    },
  });
  const [localSignIn] = useMutation(LOCAL_SIGN_IN);

  const onSubmit: React.FormEventHandler = async (event) => {
    event.preventDefault();
    try {
      if (action === "SignUp") {
        if (password.value !== confirmPassword.value) {
          throw new Error("두 개의 비밀번호가 일치하지 않습니다.");
        } else {
          const {
            data: {
              signUp: { token },
            },
          } = await signUp();
          if (token) {
            await localSignIn({ variables: { token } });
          } else {
            throw new Error("이미 존재하는 닉네임 혹은 이메일 입니다.");
          }
        }
      } else {
        const {
          data: {
            signIn: { token },
          },
        } = await signIn();
        if (token) {
          await localSignIn({ variables: { token } });
          window.location.href = "/";
        } else {
          throw new Error("이메일 혹은 비밀번호가 일치하지 않습니다.");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <AuthPresenter
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      username={username}
      action={action}
      setAction={setAction}
      onSubmit={onSubmit}
    />
  );
};
