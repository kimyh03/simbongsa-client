import React from "react";
import styled from "styled-components";
import { Post } from "../../../Entities/Post.entity";
import { UseInputIterface } from "../../../Utils/UseInputInterface";
import ApplicationList from "./components/ApplicationList";
import Infomation from "./components/Infomations";
import QnA from "./components/QnA";

interface IProps {
  onDeleteBtnClick: () => Promise<void>;
  onOpenNCloseBtnClick: () => Promise<void>;
  handleQSubmit: () => Promise<void>;
  questionText: UseInputIterface;
  handleASubmit: (event: any) => void;
  onCompleteBtnClick: () => Promise<void>;
  onApplyBtnClick: () => Promise<void>;
  onHnadleApplyBtnClick: (event: React.MouseEvent) => void;
  isMine: boolean;
  isApplied: boolean;
  isLiked: any;
  post: Post;
  isLoggedIn: boolean;
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
const QnAContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  min-height: 200px;
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
  onCompleteBtnClick,
  onApplyBtnClick,
  onHnadleApplyBtnClick,
  isMine,
  isApplied,
  post,
  isLiked,
  isLoggedIn,
}) => (
  <Container>
    {isMine ? (
      <ButtonContainer>
        <DleteBtn onClick={onDeleteBtnClick}>삭제</DleteBtn>
      </ButtonContainer>
    ) : null}
    <Row>
      <InfomationContainer>
        <Infomation
          isLiked={isLiked}
          post={post}
          numOfApplications={post.applications?.length || 0}
          isLoggedIn={isLoggedIn}
        />
      </InfomationContainer>
      <ApplicationListContainer>
        <ApplicationList
          isMine={isMine}
          applications={post.applications || []}
          onHnadleApplyBtnClick={onHnadleApplyBtnClick}
        />
      </ApplicationListContainer>
    </Row>
    {isMine ? (
      <>
        {post.isCompleted ? (
          <CompletedIndicator>이미 종료된 활동입니다.</CompletedIndicator>
        ) : (
          <Row>
            <ToggleOpenAndCloseBtn onClick={onOpenNCloseBtnClick}>
              {post.isOpened ? "모집 중단" : "모집 시작"}
            </ToggleOpenAndCloseBtn>
            <CompleteBtn onClick={onCompleteBtnClick}>활동 종료</CompleteBtn>
          </Row>
        )}
      </>
    ) : (
      <>
        {post.isCompleted || !post.isOpened ? (
          <CompletedIndicator>지금은 모집 기간이 아닙니다.</CompletedIndicator>
        ) : (
          <ToggleApplyBtn onClick={onApplyBtnClick}>
            {isApplied ? "신청 취소" : "신청하기"}
          </ToggleApplyBtn>
        )}
      </>
    )}

    <QnAContainer>
      <QnA
        questions={post.questions || []}
        handleQSubmit={handleQSubmit}
        questionText={questionText}
        handleASubmit={handleASubmit}
        isMine={isMine}
      />
    </QnAContainer>
  </Container>
);

export default PostDetailPresenter;
