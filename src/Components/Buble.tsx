import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  text: number;
  subText: string;
}

const Bubble = styled.div`
  width: 150px;
  height: 150px;
  border: ${(props) => props.theme.border};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.deppOrangeColor};
`;

const SubText = styled.div`
  margin-left: 5px;
  margin-top: 12px;
  font-weight: 700;
  opacity: 0.7;
`;

const BubleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 20px;
`;

const Title = styled.div`
  font-size: 16px;
  opacity: 0.7;
  margin-top: 7px;
  font-weight: 700;
`;

const Buble: React.FC<IProps> = ({ title, text, subText }) => {
  return (
    <BubleContainer>
      <Bubble>
        <Text>{text}</Text>
        <SubText>{subText}</SubText>
      </Bubble>
      <Title>{title}</Title>
    </BubleContainer>
  );
};

export default Buble;
