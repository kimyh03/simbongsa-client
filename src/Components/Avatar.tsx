import React from "react";
import styled from "styled-components";
import noAvatar from "../Assets/noAvatar.png";

const Container = styled.div<{ url: string; size: string }>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border: ${(props) => props.theme.border};
`;

interface IProps {
  url?: string;
  size?: string;
}

const Avatar: React.FC<IProps> = ({ url = noAvatar, size = "35px" }) => {
  if (!url) url = noAvatar;
  return <Container url={url} size={size}></Container>;
};

export default Avatar;
