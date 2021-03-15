import { gql } from "apollo-boost";

export const DELETE_POST = gql`
  mutation deletePost($postId: Float!) {
    deletePost(input: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_OPEN_CLOSE = gql`
  mutation toggleOpenAndClose($postId: Float!) {
    toggleOpenAndClose(input: { postId: $postId }) {
      ok
    }
  }
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion($postId: Float!, $text: String!) {
    createQuestion(input: { postId: $postId, text: $text }) {
      ok
    }
  }
`;

export const CREATE_ANSWER = gql`
  mutation answerTheQuestion($questionId: Float!, $text: String!) {
    answerTheQuestion(input: { questionId: $questionId, text: $text }) {
      ok
    }
  }
`;

export const COMPLETE_POST = gql`
  mutation completePost($postId: Float!) {
    completePost(input: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: Float!) {
    toggleLike(input: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_APPLY = gql`
  mutation toggleApply($postId: Float!) {
    toggleApply(input: { postId: $postId }) {
      ok
    }
  }
`;

export const HANDLE_APPLICATION = gql`
  mutation handleApplication($applicationId: Float!, $status: String!) {
    handleApplication(
      input: { applicationId: $applicationId, status: $status }
    ) {
      ok
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query getPostDetail($postId: Float!) {
    getPostDetail(input: { postId: $postId }) {
      isMine
      isLiked
      isApplied
      post {
        user {
          id
          username
          email
        }
        id
        createdAt
        title
        description
        category
        date
        rigion
        adress
        host
        NumOfRecruitment
        recognizedHours
        isOpened
        isCompleted
        applications {
          id
          createdAt
          status
          user {
            id
            avatar
            username
          }
        }
        questions {
          user {
            id
            username
            avatar
          }
          id
          text
          createdAt
          answer {
            id
            text
            createdAt
          }
        }
      }
    }
  }
`;

export const GET_ISLOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;
