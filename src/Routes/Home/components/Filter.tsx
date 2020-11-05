import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import {
  postCategoryEnum,
  postRigionEnum,
} from "../../../Entities/Post.entity";
import { Dot } from "../../../Utils/Icons";
import { UseInputIterface } from "../../../Utils/UseInputInterface";

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

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SellectBtn = styled.button<{ isClicked: boolean }>`
  text-align: center;
  width: 100px;
  :hover {
    cursor: pointer;
  }
  font-size: 13px;
  height: 30px;
  margin-right: 30px;
  border-radius: 10px;
  border: ${(props) => (props.isClicked ? "none" : "1px solid #dadada;")};
  color: ${(props) => (props.isClicked ? "white" : "inherit")};
  background: ${(props) =>
    props.isClicked ? props.theme.deppOrangeColor : "none"};
`;
const FilterContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  border: ${(props) => props.theme.border};
`;
const FilterItem = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  border-bottom: ${(props) => props.theme.border};
`;
const Subject = styled.div`
  width: 100px;
  margin-left: 15px;
`;
const CheckBox = styled.input``;
const SearchBox = styled.input`
  width: 80%;
  padding: 20px;
  border: ${(props) => props.theme.border};
  :focus {
    outline: ${(props) => props.theme.borderFocus};
  }
`;
const SearchBtn = styled.button`
  width: 9%;
  margin-left: 10px;
  height: 40px;
`;
interface IProps {
  onSearch: any;
  onClickCategory: any;
  onClickRigion: any;
  onCheckIsOpen: any;
  categories: string[];
  rigions: string[];
  SearchTermInput: UseInputIterface;
}
const Filter: React.FC<IProps> = ({
  onSearch,
  onClickCategory,
  onClickRigion,
  onCheckIsOpen,
  categories,
  SearchTermInput,
  rigions,
}) => {
  return (
    <>
      <Helmet>
        <title>Home | 자원봉사1365</title>
      </Helmet>
      <Header>
        <Dot />
        <Title>봉사조회</Title>
      </Header>
      <FilterContainer>
        <FilterItem>
          <Dot />
          <Subject>카테고리</Subject>
          <BtnContainer>
            <SellectBtn
              value={postCategoryEnum.environment}
              isClicked={categories.includes(postCategoryEnum.environment)}
              onClick={(event) => {
                onClickCategory(event);
              }}
            >
              환경보호
            </SellectBtn>
            <SellectBtn
              value={postCategoryEnum.eventSupport}
              isClicked={categories.includes(postCategoryEnum.eventSupport)}
              onClick={(event) => {
                onClickCategory(event);
              }}
            >
              행사지원
            </SellectBtn>
            <SellectBtn
              value={postCategoryEnum.communityService}
              isClicked={categories.includes(postCategoryEnum.communityService)}
              onClick={(event) => {
                onClickCategory(event);
              }}
            >
              생활지원
            </SellectBtn>
            <SellectBtn
              value={postCategoryEnum.ruralAtivity}
              isClicked={categories.includes(postCategoryEnum.ruralAtivity)}
              onClick={(event) => {
                onClickCategory(event);
              }}
            >
              농어촌활동
            </SellectBtn>
          </BtnContainer>
        </FilterItem>
        <FilterItem>
          <Dot />
          <Subject>지역</Subject>
          <BtnContainer>
            <SellectBtn
              value={postRigionEnum.Seoul}
              isClicked={rigions.includes(postRigionEnum.Seoul)}
              onClick={onClickRigion}
            >
              서울특별시
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Incheon}
              isClicked={rigions.includes(postRigionEnum.Incheon)}
              onClick={onClickRigion}
            >
              인천광역시
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Gyeonggi}
              isClicked={rigions.includes(postRigionEnum.Gyeonggi)}
              onClick={onClickRigion}
            >
              경기도
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Chungcheong}
              isClicked={rigions.includes(postRigionEnum.Chungcheong)}
              onClick={onClickRigion}
            >
              충청도
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Gyeongsang}
              isClicked={rigions.includes(postRigionEnum.Gyeongsang)}
              onClick={onClickRigion}
            >
              경상도
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Jeolla}
              isClicked={rigions.includes(postRigionEnum.Jeolla)}
              onClick={onClickRigion}
            >
              전라도
            </SellectBtn>
            <SellectBtn
              value={postRigionEnum.Jeju}
              isClicked={rigions.includes(postRigionEnum.Jeju)}
              onClick={onClickRigion}
            >
              제주도
            </SellectBtn>
          </BtnContainer>
        </FilterItem>
        <FilterItem>
          <Dot />
          <Subject>상태</Subject>
          <CheckBox
            type={"CheckBox"}
            onClick={(event) => {
              onCheckIsOpen(event);
            }}
          />
          모집 중인 공고만
        </FilterItem>
        <FilterItem>
          <Dot />
          <Subject>검색</Subject>
          <SearchBox
            placeholder={"검색어를 입력해 주세요."}
            value={SearchTermInput.value}
            onChange={SearchTermInput.onChange}
          ></SearchBox>
          <SearchBtn
            onClick={(event) => {
              onSearch(event);
            }}
          >
            검색
          </SearchBtn>
        </FilterItem>
      </FilterContainer>
    </>
  );
};

export default Filter;
