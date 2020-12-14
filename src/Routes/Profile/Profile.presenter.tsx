/* eslint-disable jsx-a11y/alt-text */
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
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 21px;
  font-weight: 700;
`;

const TopTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
const Input = styled.input`
  border: ${(props) => props.theme.border};
  border-radius: 5px;
  width: 100%;
`;
const Button = styled.button`
  background-color: ${(props) => props.theme.deppOrangeColor};
  color: white;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 700;
  margin-top: 5px;
`;
const LogoutBtn = styled.button`
  background-color: ${(props) => props.theme.deppOrangeColor};
  color: white;
  padding: 3px 10px;
  border-radius: 5px;
  font-weight: 700;
  display: flex;
  justify-self: flex-end;
  align-self: flex-end;
`;
const TitleText = styled.div`
  margin-left: 20px;
`;
const Wrapper = styled.div`
  display: flex;
`;

interface IProps {
  onClickLogOut: () => void;
  isSelf: boolean;
  user: User;
  likes: Like[];
  applications: Application[];
  handleSubmit: (event: React.FormEvent<Element>) => void;
  onChange: any;
}

const ProfilePresenter: React.FC<IProps> = ({
  onClickLogOut,
  isSelf,
  user,
  likes,
  applications,
  handleSubmit,
  onChange,
}) => {
  const postCount = user.posts?.length || 0;
  const activityCount = user.activityCount;
  const activityTime = user.activityTime;
  return (
    <Container>
      <Helmet>
        <title>Profile | 자원봉사1365</title>
      </Helmet>
      <Section>
        <TopTitle>
          <Wrapper>
            <Dot />
            <TitleText>사용자 정보</TitleText>
          </Wrapper>
          {isSelf ? (
            <LogoutBtn onClick={onClickLogOut}>로그아웃</LogoutBtn>
          ) : (
            <> </>
          )}
        </TopTitle>
        <ProfileCard>
          <AvatarCoulmn>
            <Avatar url={user.avatar} size={"150px"} />
            {isSelf ? (
              <Form onSubmit={handleSubmit}>
                <Input
                  onChange={onChange}
                  type={"file"}
                  accept={".jpg, .png"}
                />
                <Button>변경하기</Button>
              </Form>
            ) : null}
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
              <Dot />
              <TitleText>관심 모집공고</TitleText>
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
              <Dot /> <TitleText>참가신청 모집공고</TitleText>
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
          <Dot />
          <TitleText>작성한 모집공고</TitleText>
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
          <Dot />
          <TitleText> 자원 봉사활동 인증서</TitleText>
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
