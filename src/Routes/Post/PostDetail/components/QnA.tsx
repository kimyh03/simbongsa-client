import React from "react";
import styled from "styled-components";
import Avatar from "../../../../Components/Avatar";
import { Question } from "../../../../Entities/Question.entity";
import { Dot } from "../../../../Utils/Icons";
import { UseInputIterface } from "../../../../Utils/UseInputInterface";

const Container = styled.div`
  border: ${(props) => props.theme.border};
`;
const Header = styled.div`
  display: flex;
  min-height: 50px;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => props.theme.border};
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 20px;
`;
const AskForm = styled.div`
  display: flex;
  justify-content: space-between;
`;
const QInput = styled.input`
  width: 90%;
  margin: 5px;
  padding: 40px 200px;
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
  :hover {
    outline: ${(props) => props.theme.borderFocus};
  }
`;
const QButton = styled.button`
  width: 10%;
  margin: 5px;
`;
const AInput = styled.input`
  width: 90%;
  margin: 5px;
  padding: 15px;
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
  :hover {
    outline: ${(props) => props.theme.borderFocus};
  }
`;
const AButton = styled.button`
  width: 10%;
`;
const QnAList = styled.div`
  padding: 50px;
  max-height: 500px;
  overflow: auto;
`;
const QContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  margin-bottom: 15px;
  background-color: ${(props) => props.theme.greyBgColor};
  border-radius: 20px 20px 20px 0;
  padding: 20px;
`;
const QUser = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  align-items: center;
  font-weight: 700;
  :hover {
    color: ${(props) => props.theme.deppOrangeColor};
  }
`;
const QText = styled.div`
  margin-left: 30px;
`;
const AContainer = styled.form`
  margin-top: 10px;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
`;
const Answer = styled.div`
  background-color: #cecece;
  padding: 20px;
  padding-left: 40px;
  border-radius: 20px 20px 0 20px;
  justify-self: flex-end;
  align-self: flex-end;
  text-align: right;
`;

const QnAItem = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
`;
const Row = styled.div`
  justify-self: flex-end;
  align-self: flex-end;
  width: 80%;
`;
const Username = styled.div`
  margin-left: 15px;
`;

interface IProps {
  questions: Question[];
  handleQSubmit: () => Promise<void>;
  questionText: UseInputIterface;
  handleASubmit: (event: React.FormEvent) => void;
  isMine: boolean;
}

const QnA: React.FC<IProps> = ({
  questions,
  handleQSubmit,
  questionText,
  handleASubmit,
  isMine,
}) => {
  return (
    <Container>
      <Header>
        <Dot />
        <Title>질문과 답변</Title>
      </Header>
      <AskForm>
        <QInput value={questionText.value} onChange={questionText.onChange} />
        <QButton onClick={handleQSubmit}>등록</QButton>
      </AskForm>
      <QnAList>
        {questions.map((question, index) => (
          <QnAItem key={index}>
            <QContainer>
              <QUser
                onClick={() =>
                  (window.location.href = `/profile/${question.user.id}`)
                }
              >
                <Avatar />
                <Username>{question.user.username}</Username>
              </QUser>
              <QText>{question.text}</QText>
            </QContainer>
            <Row>
              {question.answer && <Answer>{question.answer.text}</Answer>}
              {!question.answer && isMine && (
                <AContainer onSubmit={handleASubmit} id={`${question.id}`}>
                  <AInput />
                  <AButton>등록</AButton>
                </AContainer>
              )}
            </Row>
          </QnAItem>
        ))}
      </QnAList>
    </Container>
  );
};

export default QnA;
