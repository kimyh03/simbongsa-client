import React from "react";
import styled from "styled-components";
import Avatar from "../../../../Components/Avatar";
import { Question } from "../../../../Entities/Question.entity";
import { Dot } from "../../../../Utils/Icons";
import { UseInputIterface } from "../../../../Utils/UseInputInterface";

const Container = styled.div`
  height: 350px;

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
const Wrapper = styled.div`
  display: flex;
`;
const QInput = styled.input`
  width: 90%;
  padding: 40px 200px;
`;
const QButton = styled.button`
  width: 10%;
`;
const AInput = styled.input``;
const AButton = styled.button``;
const QnAContainer = styled.div`
  padding: 50px;
  height: 200px;
  overflow: auto;
`;
const QnAItem = styled.div`
  display: flex;
`;
const QUser = styled.div``;
const QText = styled.div``;
const AnswerForm = styled.div``;
const Answer = styled.div``;

interface IProps {
  questions: Question[];
  handleQSubmit: () => Promise<void>;
  questionText: UseInputIterface;
  handleASubmit: () => Promise<void>;
  answerText: UseInputIterface;
  isMine: boolean;
}

const QnA: React.FC<IProps> = ({
  questions,
  handleQSubmit,
  questionText,
  handleASubmit,
  answerText,
  isMine,
}) => {
  console.log(questions);
  return (
    <Container>
      <Header>
        <Dot />
        <Title>질문과 답변</Title>
      </Header>
      <Wrapper>
        <QInput value={questionText.value} onChange={questionText.onChange} />
        <QButton onClick={handleQSubmit}>질문등록</QButton>
      </Wrapper>
      <QnAContainer>
        {questions.map((question) => {
          return (
            <>
              <QnAItem>
                <Avatar />
                <QUser
                  onClick={() =>
                    (window.location.href = `/profile/${question.user.id}`)
                  }
                >
                  {question.user.username}
                </QUser>
                <QText>{question.text}</QText>
              </QnAItem>
              {question.answer && <Answer>{question.answer.text}</Answer>}
              {!question.answer && isMine && (
                <AnswerForm>
                  <AInput
                    value={answerText.value}
                    onChange={answerText.onChange}
                  ></AInput>
                  <AButton onClick={handleASubmit}>답변등록</AButton>
                </AnswerForm>
              )}
            </>
          );
        })}
      </QnAContainer>
    </Container>
  );
};

export default QnA;
