import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Buble from "../../Components/Buble";
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
  margin-top: 50px;
`;

const Title = styled.div`
  padding: 10px;
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
  const postCount = user.posts?.length || 0;
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
          <Buble title={"모집내역"} text={postCount} subText={"건"} />
          <Buble title={"활동내역"} text={user.activityCount} subText={"건"} />
          <Buble title={"활동시간"} text={user.activityTime} subText={"시간"} />
        </ProfileCard>
      </Section>
    </Container>
  );
};

export default ProfilePresenter;
