import React from "react";
import styled from "styled-components";
import { Application } from "../../Entities/Application.entity";
import { Certificate } from "../../Entities/Certificate.entity";
import { Like } from "../../Entities/Like.entity";
import { Post } from "../../Entities/Post.entity";
import { applicationStatus } from "../../Entities/Application.entity";
import TableHeader from "./TableHeader";

const Container = styled.table`
  margin: 25px 0;
  width: 100%;
  color: #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  border-collapse: separate;
  border-spacing: 0;
`;
const Body = styled.tbody``;
const BodyRow = styled.tr`
  :hover {
    color: ${(props) => props.theme.deppOrangeColor};
  }
`;
const DataCell = styled.td`
  font-size: 15px;
  opacity: 0.8;
  text-align: center;
  padding: 12px 10px;
  border-right: 1px solid #dee3eb;
  border-bottom: ${(props) => props.theme.border};
  :last-child {
    border-right: none;
  }
`;
const FakeButton = styled.button`
  border: ${(props) => props.theme.border};
  padding: 2px 15px;
`;

export enum TableTypeEnum {
  Application,
  Post,
  Like,
  Certificate,
}

export interface HeaderOption {
  title: string;
  width: number;
}

interface IProps {
  type: TableTypeEnum;
  applications?: Application[];
  posts?: Post[];
  likes?: Like[];
  certificates?: Certificate[];
  headerOptions: HeaderOption[];
}

const Table: React.FC<IProps> = ({
  type,
  applications,
  posts,
  likes,
  certificates,
  headerOptions,
}) => {
  if (type === TableTypeEnum.Post) {
    return (
      <Container>
        <TableHeader headerOptions={headerOptions} />
        <Body>
          <>
            {posts?.map((post, index) => {
              let status;
              if (post.isCompleted) {
                status = "활동종료";
              } else if (post.isOpened) {
                status = "모집중";
              } else {
                status = "모집종료";
              }
              return (
                <BodyRow key={index}>
                  <DataCell>{index + 1}</DataCell>
                  <DataCell>{post.host}</DataCell>
                  <DataCell>
                    <a href={`/post/${post.id}`}>{post.title}</a>
                  </DataCell>
                  <DataCell>{post.recognizedHours}</DataCell>
                  <DataCell>{post.date.slice(0, 10)}</DataCell>
                  <DataCell>{status}</DataCell>
                </BodyRow>
              );
            })}
          </>
        </Body>
      </Container>
    );
  } else if (type === TableTypeEnum.Certificate) {
    return (
      <Container>
        <TableHeader headerOptions={headerOptions} />
        <Body>
          <>
            {certificates?.map((certificate, index) => (
              <BodyRow key={index}>
                <DataCell>{index + 1}</DataCell>
                <DataCell>{certificate.host}</DataCell>
                <DataCell>{certificate.title}</DataCell>
                <DataCell>{certificate.recognizedHours}</DataCell>
                <DataCell>{certificate.date.slice(0, 10)}</DataCell>
                <DataCell>
                  <FakeButton>출력</FakeButton>
                </DataCell>
              </BodyRow>
            ))}
          </>
        </Body>
      </Container>
    );
  } else if (type === TableTypeEnum.Like) {
    return (
      <Container>
        <TableHeader headerOptions={headerOptions} />
        <Body>
          <>
            {likes?.map((like, index) => {
              let status;
              if (like.post.isCompleted) {
                status = "활동종료";
              } else if (like.post.isOpened) {
                status = "모집중";
              } else {
                status = "모집종료";
              }
              return (
                <BodyRow key={index}>
                  <DataCell>{index + 1}</DataCell>
                  <DataCell>{like.post.host}</DataCell>
                  <DataCell>
                    <a href={`/post/${like.post.id}`}>{like.post.title}</a>
                  </DataCell>
                  <DataCell>{like.post.recognizedHours}</DataCell>
                  <DataCell>{like.post.date.slice(0, 10)}</DataCell>
                  <DataCell>{status}</DataCell>
                </BodyRow>
              );
            })}
          </>
        </Body>
      </Container>
    );
  } else if (type === TableTypeEnum.Application) {
    return (
      <Container>
        <TableHeader headerOptions={headerOptions} />
        <Body>
          <>
            {applications?.map((application, index) => {
              let status;
              if (application.status === applicationStatus.pendding)
                status = "심사중";
              if (application.status === applicationStatus.accepted)
                status = "완료";
              if (application.status === applicationStatus.rejected)
                status = "거절";
              return (
                <BodyRow key={index}>
                  <DataCell>{index + 1}</DataCell>
                  <DataCell>{application.post.host}</DataCell>
                  <DataCell>
                    <a href={`/post/${application.post.id}`}>
                      {application.post.title}
                    </a>
                  </DataCell>
                  <DataCell>{application.post.recognizedHours}</DataCell>
                  <DataCell>{application.createdAt.slice(0, 10)}</DataCell>
                  <DataCell>{status}</DataCell>
                </BodyRow>
              );
            })}
          </>
        </Body>
      </Container>
    );
  } else return null;
};

export default Table;
