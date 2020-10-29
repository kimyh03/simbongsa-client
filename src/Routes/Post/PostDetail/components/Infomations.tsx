import React from "react";
import styled from "styled-components";
import { Post, postCategoryEnum } from "../../../../Entities/Post.entity";
import { Dot, HeartEmpty, HeartFull } from "../../../../Utils/Icons";

const Container = styled.div`
  height: 100%;
  border: ${(props) => props.theme.border};
`;

interface IProps {
  post: Post;
  onLikeBtnClick: any;
  isLiked: boolean;
  numOfApplications: number;
}
const Header = styled.div`
  display: flex;
  height: 8%;
  align-items: center;
  justify-content: center;
  border-bottom: ${(props) => props.theme.border};
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-left: 20px;
`;
const Body = styled.div`
  height: 85%;
`;
const Table = styled.table`
  width: 100%;
  text-align: center;
`;
const TableRow = styled.tr`
  border-bottom: ${(props) => props.theme.border};
  font-weight: 700;
  font-size: 15px;
`;
const HeadCell = styled.td`
  border-right: ${(props) => props.theme.border};
  padding: 15px;
`;
const DataCell = styled.td`
  opacity: 0.5;
`;
const UserCell = styled.td`
  opacity: 0.5;
  :hover {
    cursor: pointer;
    color: ${(props) => props.theme.deppOrangeColor};
  }
`;

const LikeBtn = styled.button`
  background: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-end;
  align-self: flex-end;
  height: 7%;
  border-top: ${(props) => props.theme.border};
`;

const Description = styled.div`
  padding: 50px;
`;
const Infomation: React.FC<IProps> = ({
  post,
  onLikeBtnClick,
  isLiked,
  numOfApplications,
}) => {
  const {
    title,
    category,
    date,
    adress,
    host,
    NumOfRecruitment,
    recognizedHours,
    isOpened,
    isCompleted,
    description,
  } = post;
  const year = date.slice(0, 4);
  const month = date.slice(5, 7);
  const day = date.slice(8, 10);
  let categoryInKO;
  if (category === postCategoryEnum.environment) categoryInKO = "환경보호";
  if (category === postCategoryEnum.eventSupport) categoryInKO = "행사지원";
  if (category === postCategoryEnum.communityService) categoryInKO = "생활지원";
  if (category === postCategoryEnum.ruralAtivity) categoryInKO = "농어촌활동";
  let status;
  if (isCompleted) {
    status = "활동 종료";
  } else if (isOpened) {
    status = "모집중";
  } else {
    status = "모집완료";
  }
  return (
    <Container>
      <Header>
        <Dot />
        <Title>{title}</Title>
      </Header>
      <Body>
        <Table>
          <colgroup>
            <col width={"17%"}></col>
            <col width={"83%"}></col>
          </colgroup>
          <tbody>
            <TableRow
              onClick={() =>
                (window.location.href = `/profile/${post.user.id}`)
              }
            >
              <HeadCell className={"user"}>모집자</HeadCell>
              <UserCell>{`${post.user.username} / ${post.user.email}`}</UserCell>
            </TableRow>
            <TableRow>
              <HeadCell>분류</HeadCell>
              <DataCell>{categoryInKO}</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>모집기관</HeadCell>
              <DataCell>{host}</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>활동날짜</HeadCell>
              <DataCell>{`${year}년 ${month}월 ${day}일`}</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>주소</HeadCell>
              <DataCell>{adress}</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>모집인원</HeadCell>
              <DataCell>{NumOfRecruitment} 명</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>신청인원</HeadCell>
              <DataCell>{numOfApplications} 명</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>인증시간</HeadCell>
              <DataCell>{recognizedHours}시간</DataCell>
            </TableRow>
            <TableRow>
              <HeadCell>상태</HeadCell>
              <DataCell>{status}</DataCell>
            </TableRow>
          </tbody>
        </Table>
        <Description>{description}</Description>
      </Body>
      <LikeBtn onClick={onLikeBtnClick}>
        {isLiked ? <HeartFull /> : <HeartEmpty />}
      </LikeBtn>
    </Container>
  );
};

export default Infomation;
