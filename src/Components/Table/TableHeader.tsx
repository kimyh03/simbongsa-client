import React from "react";
import styled from "styled-components";
import { HeaderOption } from "./Table";

interface IProps {
  headerOptions: HeaderOption[];
}

const CoulmnGroup = styled.colgroup``;
const Coulmn = styled.col``;
const Header = styled.thead``;
const HeaderCell = styled.th`
  padding: 15px 0;
  background: #f8f8f8;
  border-bottom: ${(props) => props.theme.border};
  font-size: 17px;
  font-weight: 700;
  border-right: 1px solid #dee3eb;
  :last-child {
    border-right: none;
  }
`;
const HeaderRow = styled.tr``;

const TableHeader: React.FC<IProps> = ({ headerOptions }) => {
  return (
    <>
      <CoulmnGroup>
        {headerOptions.map((option, index) => (
          <Coulmn key={index} width={`${option.width}%`}></Coulmn>
        ))}
      </CoulmnGroup>
      <Header>
        <HeaderRow>
          {headerOptions.map((option, index) => (
            <HeaderCell key={index} scope={"col"}>
              {option.title}
            </HeaderCell>
          ))}
        </HeaderRow>
      </Header>
    </>
  );
};

export default TableHeader;
