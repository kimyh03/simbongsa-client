import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import { Application } from "../../Entities/Application.entity";
import { Like } from "../../Entities/Like.entity";
import { User } from "../../Entities/User.entity";
import { Dot } from "../../Utils/Icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  margin: 0;
  margin: auto;
`;

const Title = styled.div`
  padding: 10px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: 700;
`;

const ProfileCard = styled.div`
  background-color: white;
  margin-top: 20px;
  display: flex;
  padding: 50px;
  height: 250px;
  align-items: center;
  border: ${(props) => props.theme.border};
  border-radius: 5px;
`;
const AvatarCoulmn = styled.div`
  margin: 0 50px;
`;
const DetailCoulmn = styled.div`
  height: 100%;
  margin-right: 150px;
  margin-top: 20px;
`;
const Username = styled.div`
  font-size: 30px;
  font-weight: 700;
  opacity: 0.8;
`;
const UserEmail = styled.div`
  font-size: 15px;
  opacity: 0.7;
  margin-top: 10px;
`;
const Bubble = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  border: ${(props) => props.theme.border};
  margin: 0 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BubleText = styled.div`
  font-size: 40px;
  color: ${(props) => props.theme.deppOrangeColor};
`;

const BubleSubText = styled.div`
  margin-left: 5px;
  margin-top: 12px;
  font-weight: 700;
  opacity: 0.7;
`;

const BubleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BubleTitle = styled.div`
  font-size: 16px;
  opacity: 0.7;
  margin-top: 7px;
  font-weight: 700;
`;

interface IProps {
  onClickLogOut: () => void;
  isSelf: boolean;
  user: User;
  likes: Like[];
  applications: Application[];
}

const ProfilePresenter: React.FC<IProps> = ({
  onClickLogOut,
  isSelf,
  user,
  likes,
  applications,
}) => {
  console.log(user);
  return (
    <Container>
      <Helmet>
        <title>Profile | 자원봉사1365</title>
      </Helmet>
      <Section>
        <Title>
          <Dot /> 내정보
        </Title>
        <ProfileCard>
          <AvatarCoulmn>
            <Avatar size={"150px"} />
          </AvatarCoulmn>
          <DetailCoulmn>
            <Username>{user.username}</Username>
            <UserEmail>{user.email}</UserEmail>
          </DetailCoulmn>
          <BubleContainer>
            <Bubble>
              <BubleText>{user.activityCount}</BubleText>
              <BubleSubText>건</BubleSubText>
            </Bubble>
            <BubleTitle>활동내역</BubleTitle>
          </BubleContainer>
          <BubleContainer>
            <Bubble>
              <BubleText>{user.activityTime}</BubleText>
              <BubleSubText>시간</BubleSubText>
            </Bubble>
            <BubleTitle>활동시간</BubleTitle>
          </BubleContainer>
        </ProfileCard>
      </Section>
    </Container>
  );
};

export default ProfilePresenter;
