import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  border-top: ${(props) => props.theme.borderBold};
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 200px;
  opacity: 0.9;
  font-size: 14px;
  color: ${(props) => props.theme.darkGreyColor};
  line-height: 1.5;
  margin-top: 100px;
`;
const List = styled.ul`
  display: flex;
  width: 200px;
  justify-content: space-between;
`;
const ListItem = styled.li``;
const Copyright = styled.span``;

export default () => (
  <Container>
    <List>
      <ListItem>GitHub link</ListItem>
      <ListItem>
        <a
          href={"https://github.com/kimyh03/simbongsa-backend"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Backend
        </a>
      </ListItem>
      <ListItem>
        <a
          href={"https://github.com/kimyh03/simbongsa-frontend"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend
        </a>
      </ListItem>
    </List>
    <Copyright>
      Hoony Portfolio {new Date().getFullYear()} &copy; Kim Younghoon
    </Copyright>
  </Container>
);
