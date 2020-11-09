import React from "react";
import styled from "styled-components";
import { Post, postCategoryEnum } from "../../../Entities/Post.entity";

const Container = styled.div``;
const Header = styled.div`
  display: flex;
  margin-top: 25px;
  font-size: 18px;
  text-align: center;
  border-bottom: ${(props) => props.theme.border};
  padding-bottom: 20px;
`;

const TotalCount = styled.div`
  display: flex;
  margin-right: 10px;
  align-items: center;
  text-align: center;
`;
const TotlaPage = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Text = styled.div`
  opacity: 0.7;
  text-align: center;
`;
const BoldText = styled.div`
  color: #ff4e00;
  font-weight: 700;
  margin: 0 3px;
  text-align: center;
`;
const Body = styled.div``;
const ContentList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Content = styled.li`
  padding: 40px 10px 10px 20px;
  width: 100%;
  border-bottom: ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
`;
const NoContent = styled.div`
  text-align: center;
  margin-top: 100px;
  opacity: 0.5;
`;
const Column = styled.div<{ width: number }>`
  width: ${(props) => `${props.width}%`};
`;
const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const MainRow = styled.div`
  margin-top: 25px;
  :hover {
    color: ${(props) => props.theme.deppOrangeColor};
  }
  :hover {
    cursor: pointer;
  }
`;
const Status = styled.div<{ isOpened: Boolean }>`
  background-color: ${(props) => (props.isOpened ? "#f36200" : "#7A7A7A")};
  padding: 7px 15px;
  border-radius: 15px;
  color: white;
  margin-right: 30px;
`;
const Category = styled.div``;
const SubjectItem = styled.div`
  display: flex;
  margin-right: 50px;
`;
const SubjectTitle = styled.div`
  margin-right: 10px;
  font-weight: 700;
  opacity: 0.9;
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 23px;
`;
const Descriptions = styled.div`
  font-size: 20px;
  font-size: 15px;
  opacity: 0.7;
  line-height: 1.5;
  height: 50px;
`;

interface data {
  posts: Post[];
  totalPage: number;
  totalCount: number;
}

interface IProps {
  data: data;
  onClickPage: (event: React.MouseEvent<HTMLButtonElement>) => void;
  currentPage: number;
}

const PageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const PageList = styled.ul``;
const Page = styled.button<{ isClicked: boolean }>`
  margin: 0 12px;
  background: none;
  font-size: 18px;
  :hover {
    color: ${(props) => props.theme.deppOrangeColor};
  }
  color: ${(props) =>
    props.isClicked ? props.theme.deppOrangeColor : "inherits"};
`;

const ApplicationCountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 120px;
  height: 120px;
  border: ${(props) => props.theme.border};
  margin: 0;
  margin: auto;
`;
const ApplicationCountTitle = styled.div`
  height: 30%;
  width: 100%;
  text-align: center;
  border-bottom: ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ApplicationCountNumber = styled.div`
  height: 70%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
`;

const List: React.FC<IProps> = ({ data, onClickPage, currentPage }) => {
  const { posts, totalPage, totalCount } = data;
  const pageList = [];
  for (let i = 1; i < totalPage + 1; i++) {
    pageList.push(i);
  }

  if (!posts || posts.length === 0)
    return <NoContent>입력하신 검색어에 대한 조회결과가 없습니다.</NoContent>;
  else {
    return (
      <Container>
        <Header>
          <TotalCount>
            <Text>[총</Text>
            <BoldText>{totalCount}</BoldText>
            <Text>건</Text>
          </TotalCount>
          <TotlaPage>
            <Text>현재 페이지</Text>
            <BoldText>{currentPage} </BoldText>
            <Text>{`/${totalPage}]`}</Text>
          </TotlaPage>
        </Header>
        <Body>
          <ContentList>
            {posts?.map((post: Post, index: number) => {
              let openIndicator = true;
              if (post.isCompleted || !post.isOpened) {
                openIndicator = false;
              }
              let status;
              if (post.isCompleted) {
                status = "활동종료";
              } else if (post.isOpened) {
                status = "모집중";
              } else {
                status = "모집종료";
              }
              let categoryInKO;
              if (post.category === postCategoryEnum.environment)
                categoryInKO = "환경보호";
              if (post.category === postCategoryEnum.eventSupport)
                categoryInKO = "행사지원";
              if (post.category === postCategoryEnum.communityService)
                categoryInKO = "생활지원";
              if (post.category === postCategoryEnum.ruralAtivity)
                categoryInKO = "농어촌활동";

              const applicationCount = post.applications?.length ?? 0;
              return (
                <Content key={index}>
                  <Row>
                    <Column width={80}>
                      <Row>
                        <Status isOpened={openIndicator}>{status}</Status>
                        <Category>{`[${categoryInKO}]`}</Category>
                      </Row>
                      <MainRow
                        onClick={() =>
                          (window.location.href = `post/${post.id}`)
                        }
                      >
                        <Row>
                          <Title>{post.title}</Title>
                        </Row>
                        <Row>
                          <Descriptions>
                            {post.description.slice(0, 150) + "..."}
                          </Descriptions>
                        </Row>
                      </MainRow>
                    </Column>
                    <Column width={20}>
                      <ApplicationCountContainer>
                        <ApplicationCountTitle>
                          지원자 현황
                        </ApplicationCountTitle>
                        <ApplicationCountNumber>{`${applicationCount} / ${post.NumOfRecruitment}`}</ApplicationCountNumber>
                      </ApplicationCountContainer>
                    </Column>
                  </Row>
                  <Row>
                    <SubjectItem>
                      <SubjectTitle>[모집기관]</SubjectTitle>
                      <Text>{post.host}</Text>
                    </SubjectItem>
                    <SubjectItem>
                      <SubjectTitle>[활동날짜]</SubjectTitle>
                      <Text>{post.date.slice(0, 10)}</Text>
                    </SubjectItem>
                    <SubjectItem>
                      <SubjectTitle>[집결지]</SubjectTitle>
                      <Text>{post.adress}</Text>
                    </SubjectItem>
                  </Row>
                </Content>
              );
            })}
          </ContentList>
          <PageContainer>
            <PageList>
              {pageList.map((page) => (
                <Page
                  key={page}
                  isClicked={page === currentPage}
                  value={page}
                  onClick={(event) => onClickPage(event)}
                >
                  {page}
                </Page>
              ))}
            </PageList>
          </PageContainer>
        </Body>
      </Container>
    );
  }
};
export default List;
