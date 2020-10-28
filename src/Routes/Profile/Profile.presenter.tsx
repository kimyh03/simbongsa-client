import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Avatar from "../../Components/Avatar";
import Buble from "../../Components/Buble";
import Table from "../../Components/Table/Table";
import { Application } from "../../Entities/Application.entity";
import { Like } from "../../Entities/Like.entity";
import { User } from "../../Entities/User.entity";
import { Dot } from "../../Utils/Icons";
import { TableTypeEnum } from "../../Components/Table/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: space-around;
`;

const Title = styled.div`
  padding: 10px;
  font-size: 21px;
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
  width: 250px;
  height: 100%;
  margin-top: 20px;
`;
const BubleCoulmn = styled.div`
  display: flex;
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
  console.log(user.posts);
  const postCount = user.posts?.length || 0;
  const activityCount = user.activityCount;
  const activityTime = user.activityTime;
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
          <BubleCoulmn>
            <Buble title={"모집내역"} text={postCount} subText={"건"} />
            <Buble title={"활동내역"} text={activityCount} subText={"건"} />
            <Buble title={"활동시간"} text={activityTime} subText={"시간"} />
          </BubleCoulmn>
        </ProfileCard>
      </Section>
      {isSelf ? (
        <>
          <Section>
            <Title>
              <Dot /> 관심 모집공고
            </Title>
            <Table
              type={TableTypeEnum.Like}
              headerOptions={[
                { title: "순번", width: 5 },
                { title: "모집 기관", width: 10 },
                { title: "제목", width: 25 },
                { title: "인증시간", width: 10 },
                { title: "종료일", width: 10 },
                { title: "상태", width: 10 },
              ]}
              likes={likes}
            />
          </Section>
          <Section>
            <Title>
              <Dot /> 참가신청 모집공고
            </Title>
            <Table
              type={TableTypeEnum.Application}
              headerOptions={[
                { title: "순번", width: 5 },
                { title: "모집 기관", width: 10 },
                { title: "제목", width: 25 },
                { title: "인증시간", width: 10 },
                { title: "신청일", width: 10 },
                { title: "상태", width: 10 },
              ]}
              applications={applications}
            />
          </Section>
        </>
      ) : null}
      <Section>
        <Title>
          <Dot /> 작성한 모집공고
        </Title>
        <Table
          type={TableTypeEnum.Post}
          headerOptions={[
            { title: "순번", width: 5 },
            { title: "모집 기관", width: 10 },
            { title: "제목", width: 25 },
            { title: "인증시간", width: 10 },
            { title: "종료일", width: 10 },
            { title: "상태", width: 10 },
          ]}
          posts={user.posts}
        />
      </Section>
      <Section>
        <Title>
          <Dot /> 자원 봉사활동 인증서
        </Title>
        <Table
          type={TableTypeEnum.Certificate}
          headerOptions={[
            { title: "순번", width: 5 },
            { title: "발급 기관", width: 10 },
            { title: "제목", width: 25 },
            { title: "인증시간", width: 10 },
            { title: "발급일", width: 10 },
            { title: "출력", width: 10 },
          ]}
          certificates={user.certificates}
        />
      </Section>
    </Container>
  );
};

export default ProfilePresenter;
