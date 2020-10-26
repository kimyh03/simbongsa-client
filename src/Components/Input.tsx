import React from "react";
import styled from "styled-components";

interface IProps {
  type?: string;
  placeholder?: string;
  required?: boolean;
  value: string | number;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Container = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  text-align: center;
  margin-bottom: 10px;
  color: ${(props) => props.theme.orangeColor};
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
`;

const Input: React.FC<IProps> = ({
  type = "text",
  placeholder = "",
  required = true,
  value,
  onChange,
}) => {
  return (
    <Container
      required={required}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></Container>
  );
};

export default Input;
