import React from "react";
import styled from "styled-components";
import { Application } from "../../../Entities/Application.entity";
import { Post } from "../../../Entities/Post.entity";
import { Question } from "../../../Entities/Question.entity";
import { UseInputIterface } from "../../../Utils/UseInputInterface";
import ApplicationList from "./components/ApplicationList";
import Infomation from "./components/Infomations";
import QnA from "./components/QnA";

interface IProps {
  onDeleteBtnClick: () => Promise<void>;
  onOpenNCloseBtnClick: () => Promise<void>;
  handleQSubmit: () => Promise<void>;
  questionText: UseInputIterface;
  handleASubmit: () => Promise<void>;
  answerText: UseInputIterface;
  onCompleteBtnClick: () => Promise<void>;
  onLikeBtnClick: () => Promise<void>;
  onApplyBtnClick: () => Promise<void>;
  onHnadleApplyBtnClick: (event: React.MouseEvent) => void;
  isMine: boolean;
  isLiked: boolean;
  isApplied: boolean;
  post: Post;
  questions: Question[];
  applications: Application[];
}

const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const InfomationContainer = styled.div`
  width: 65%;
  height: 800px;
`;
const ApplicationListContainer = styled.div`
  width: 30%;
  height: 800px;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const DleteBtn = styled.button`
  background-color: ${(props) => props.theme.deppOrangeColor};
  font-weight: 700;
  opacity: 0.9;
  padding: 8px 17px;
  color: white;
  font-size: 14px;
  border-radius: 5px;
`;
const EditBtn = styled.button`
  background-color: ${(props) => props.theme.deppOrangeColor};
  font-weight: 700;
  opacity: 0.9;
  padding: 8px 17px;
  color: white;
  font-size: 14px;
  margin-left: 20px;
  border-radius: 5px;
`;
const QnAContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  min-height: 300px;
`;
const ToggleApplyBtn = styled.button`
  margin-top: 30px;
  padding: 15px 50px;
  background-color: ${(props) => props.theme.deppOrangeColor};
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;
const ToggleOpenAndCloseBtn = styled.button`
  margin-top: 30px;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.deppOrangeColor};
  width: 48%;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;
const CompleteBtn = styled.button`
  margin-top: 30px;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.deppOrangeColor};
  width: 48%;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;
const CompletedIndicator = styled.div`
  margin-top: 30px;
  padding: 20px 50px;
  background-color: grey;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;

const PostDetailPresenter: React.FC<IProps> = ({
  onDeleteBtnClick,
  onOpenNCloseBtnClick,
  handleQSubmit,
  questionText,
  handleASubmit,
  answerText,
  onCompleteBtnClick,
  onLikeBtnClick,
  onApplyBtnClick,
  onHnadleApplyBtnClick,
  isMine,
  isLiked,
  isApplied,
  post,
  questions,
  applications,
}) => (
  <Container>
    {isMine ? (
      <ButtonContainer>
        <DleteBtn onClick={onDeleteBtnClick}>삭제</DleteBtn>
        <EditBtn
          onClick={() => (window.location.href = `/post/${post.id}/edit`)}
        >
          수정
        </EditBtn>
      </ButtonContainer>
    ) : null}
    <Row>
      <InfomationContainer>
        <Infomation
          post={post}
          onLikeBtnClick={onLikeBtnClick}
          isLiked={isLiked}
          numOfApplications={applications.length}
        />
      </InfomationContainer>
      <ApplicationListContainer>
        <ApplicationList
          isMine={isMine}
          applications={applications}
          onHnadleApplyBtnClick={onHnadleApplyBtnClick}
        />
      </ApplicationListContainer>
    </Row>
    {post.isCompleted ? (
      <CompletedIndicator>이미 종료된 활동입니다.</CompletedIndicator>
    ) : isMine ? (
      <Row>
        <ToggleOpenAndCloseBtn onClick={onOpenNCloseBtnClick}>
          {post.isOpened ? "모집 중단" : "모집 고고"}
        </ToggleOpenAndCloseBtn>
        <CompleteBtn onClick={onCompleteBtnClick}>활동 종료</CompleteBtn>
      </Row>
    ) : (
      <ToggleApplyBtn onClick={onApplyBtnClick}>
        {isApplied ? "신청 취소" : "신청하기"}
      </ToggleApplyBtn>
    )}
    <QnAContainer>
      <QnA
        questions={questions}
        handleQSubmit={handleQSubmit}
        questionText={questionText}
        handleASubmit={handleASubmit}
        answerText={answerText}
        isMine={isMine}
      />
    </QnAContainer>
  </Container>
);

export default PostDetailPresenter;
