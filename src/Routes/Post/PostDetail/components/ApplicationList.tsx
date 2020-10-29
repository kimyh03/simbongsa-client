import React from "react";
import styled from "styled-components";
import Avatar from "../../../../Components/Avatar";
import { Application } from "../../../../Entities/Application.entity";
import { applicationStatus } from "../../../../Entities/Application.entity";
import { Dot } from "../../../../Utils/Icons";

const Container = styled.div`
  height: 100%;
  border: ${(props) => props.theme.border};
`;
const Header = styled.div`
  display: flex;
  height: 8%;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => props.theme.border};
`;
const Body = styled.ul``;
const ApplicationItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px 0;
  border-bottom: ${(props) => props.theme.border};
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.deppOrangeColor};
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 20px;
`;

const UserName = styled.div``;
const ButtonContainer = styled.div``;
const RejectButton = styled.button`
  padding: 7px 10px;
  border-radius: 5px;
`;
const AcceptButton = styled.button`
  margin-left: 10px;
  padding: 7px 10px;
  border-radius: 5px;
`;
const Spacer = styled.div``;
interface IProps {
  applications: Application[];
  onHnadleApplyBtnClick: (event: React.MouseEvent) => void;
  isMine: boolean;
}

const ApplicationList: React.FC<IProps> = ({
  applications,
  onHnadleApplyBtnClick,
  isMine,
}) => {
  return (
    <Container>
      <Header>
        <Dot />
        <Title>현재 신청자</Title>
      </Header>
      <Body>
        {applications.map((application) => (
          <>
            <ApplicationItem
              onClick={() =>
                (window.location.href = `/profile/${application.user.id}`)
              }
            >
              <Avatar size={"40px"} />
              <UserName>{application.user.username}</UserName>
              {isMine ? (
                <ButtonContainer>
                  <RejectButton
                    value={applicationStatus.rejected}
                    onClick={onHnadleApplyBtnClick}
                  >
                    거절
                  </RejectButton>
                  <AcceptButton
                    value={applicationStatus.accepted}
                    onClick={onHnadleApplyBtnClick}
                  >
                    수락
                  </AcceptButton>
                </ButtonContainer>
              ) : (
                <Spacer></Spacer>
              )}
            </ApplicationItem>
          </>
        ))}
      </Body>
    </Container>
  );
};

export default ApplicationList;
