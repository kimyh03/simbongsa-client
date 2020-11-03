import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import {
  postCategoryEnum,
  postRigionEnum,
} from "../../../Entities/Post.entity";
import { Dot } from "../../../Utils/Icons";
import { UseInputIterface } from "../../../Utils/UseInputInterface";

const Container = styled.div`
  margin: 0;
  margin: auto;
  width: 90%;
`;
const Header = styled.div`
  margin-top: 20px;
  padding: 30px 0;
  display: flex;
  height: 8%;
  align-items: center;
  border-bottom: ${(props) => props.theme.border};
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-left: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Subject = styled.div`
  width: 15%;
  font-weight: 700;
  color: ${(props) => props.theme.deppOrangeColor};
  opacity: 0.7;
`;
const Input = styled.input`
  text-align: center;
  width: 85%;
  height: 50px;
  padding: 10px 50px;
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
`;
const Textarea = styled.input`
  height: 200px;
  width: 85%;
  padding: 10px 50px;
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
  word-break: break-all;
`;
const BtnContainer = styled.div`
  width: 80%;
  display: flex;
`;
const CategoryBtn = styled.div<{ isClicked: boolean }>`
  text-align: center;
  width: 13%;
  :hover {
    cursor: pointer;
  }
  font-size: 13px;
  padding: 10px 5px;
  margin-right: 30px;
  border-radius: 10px;
  border: ${(props) => (props.isClicked ? "none" : "1px solid #dadada;")};
  color: ${(props) => (props.isClicked ? "white" : "inherit")};
  background: ${(props) =>
    props.isClicked ? props.theme.deppOrangeColor : "none"};
`;
const CreateBtn = styled.button`
  margin-top: 30px;
  padding: 20px 50px;
  background-color: ${(props) => props.theme.deppOrangeColor};
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: white;
`;

interface IProps {
  title: UseInputIterface;
  description: UseInputIterface;
  adress: UseInputIterface;
  host: UseInputIterface;
  numOfRecruitment: UseInputIterface;
  recognizedHours: UseInputIterface;
  date: UseInputIterface;
  category: typeof postCategoryEnum;
  setCategory: any;
  rigion: typeof postRigionEnum;
  setRigion: any;
  onSubmit: (event: FormEvent) => Promise<void>;
}

const PostCreatePresenter: React.FC<IProps> = ({
  title,
  description,
  adress,
  host,
  numOfRecruitment,
  recognizedHours,
  date,
  setCategory,
  setRigion,
  onSubmit,
}) => {
  const [CategoryIsClicked, setCategoryIsClicked] = useState("");
  const [RigionIsClicked, setRigionIsClicked] = useState("");
  return (
    <Container>
      <Header>
        <Dot />
        <Title>모집공고 생성</Title>
      </Header>
      <Form onSubmit={onSubmit}>
        <List>
          <Item>
            <Subject>제목</Subject>
            <Input
              required={true}
              value={title.value}
              onChange={title.onChange}
            ></Input>
          </Item>
          <Item>
            <Subject>분류</Subject>
            <BtnContainer>
              <CategoryBtn
                isClicked={CategoryIsClicked === postCategoryEnum.environment}
                onClick={() => {
                  setCategory(postCategoryEnum.environment);
                  setCategoryIsClicked(postCategoryEnum.environment);
                }}
              >
                환경보호
              </CategoryBtn>
              <CategoryBtn
                isClicked={CategoryIsClicked === postCategoryEnum.eventSupport}
                onClick={() => {
                  setCategory(postCategoryEnum.eventSupport);
                  setCategoryIsClicked(postCategoryEnum.eventSupport);
                }}
              >
                행사지원
              </CategoryBtn>
              <CategoryBtn
                isClicked={
                  CategoryIsClicked === postCategoryEnum.communityService
                }
                onClick={() => {
                  setCategory(postCategoryEnum.communityService);
                  setCategoryIsClicked(postCategoryEnum.communityService);
                }}
              >
                생활지원
              </CategoryBtn>
              <CategoryBtn
                isClicked={CategoryIsClicked === postCategoryEnum.ruralAtivity}
                onClick={() => {
                  setCategory(postCategoryEnum.ruralAtivity);
                  setCategoryIsClicked(postCategoryEnum.ruralAtivity);
                }}
              >
                농어촌활동
              </CategoryBtn>
            </BtnContainer>
          </Item>
          <Item>
            <Subject>모집기관</Subject>
            <Input
              required={true}
              value={host.value}
              onChange={host.onChange}
            ></Input>
          </Item>
          <Item>
            <Subject>활동날짜</Subject>
            <Input
              required={true}
              value={date.value}
              onChange={date.onChange}
              type={"date"}
            ></Input>
          </Item>
          <Item>
            <Subject>지역</Subject>
            <BtnContainer>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Seoul);
                  setRigion(postRigionEnum.Seoul);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Seoul}
              >
                서울특별시
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Incheon);
                  setRigion(postRigionEnum.Incheon);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Incheon}
              >
                인천광역시
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Gyeonggi);
                  setRigion(postRigionEnum.Gyeonggi);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Gyeonggi}
              >
                경기도
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Chungcheong);
                  setRigion(postRigionEnum.Chungcheong);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Chungcheong}
              >
                충청도
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Gyeongsang);
                  setRigion(postRigionEnum.Gyeongsang);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Gyeongsang}
              >
                경상도
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Jeolla);
                  setRigion(postRigionEnum.Jeolla);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Jeolla}
              >
                전라도
              </CategoryBtn>
              <CategoryBtn
                onClick={() => {
                  setRigionIsClicked(postRigionEnum.Jeju);
                  setRigion(postRigionEnum.Jeju);
                }}
                isClicked={RigionIsClicked === postRigionEnum.Jeju}
              >
                제주도
              </CategoryBtn>
            </BtnContainer>
          </Item>
          <Item>
            <Subject>상세 주소</Subject>
            <Input
              required={true}
              value={adress.value}
              onChange={adress.onChange}
            ></Input>
          </Item>
          <Item>
            <Subject>모집인원</Subject>
            <Input
              required={true}
              value={numOfRecruitment.value}
              onChange={numOfRecruitment.onChange}
              type={"number"}
            ></Input>
          </Item>
          <Item>
            <Subject>인증시간</Subject>
            <Input
              required={true}
              value={recognizedHours.value}
              onChange={recognizedHours.onChange}
              type={"number"}
            ></Input>
          </Item>
          <Item>
            <Subject>상세설명</Subject>
            <Textarea
              required={true}
              value={description.value}
              onChange={description.onChange}
            ></Textarea>
          </Item>
        </List>
        <CreateBtn>등록하기</CreateBtn>
      </Form>
    </Container>
  );
};

export default PostCreatePresenter;
