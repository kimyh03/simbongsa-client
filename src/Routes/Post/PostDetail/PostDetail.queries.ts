import { gql } from "apollo-boost";

export const DELETE_POST = gql`
  mutation deletePost($postId: Float!) {
    deletePost(args: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_OPEN_CLOSE = gql`
  mutation toggleOpenAndClose($postId: Float!) {
    toggleOpenAndClose(args: { postId: $postId }) {
      ok
    }
  }
`;

export const CREATE_QUESTION = gql`
  mutation createQuestion($postId: Float!, $text: String!) {
    createQuestion(args: { postId: $postId, text: $text }) {
      ok
    }
  }
`;

export const CREATE_ANSWER = gql`
  mutation answerTheQuestion($questionId: Float!, $text: String!) {
    answerTheQuestion(args: { questionId: $questionId, text: $text }) {
      ok
    }
  }
`;

export const COMPLETE_POST = gql`
  mutation completePost($postId: Float!) {
    completePost(args: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: Float!) {
    toggleLike(args: { postId: $postId }) {
      ok
    }
  }
`;

export const TOGGLE_APPLY = gql`
  mutation toggleApply($postId: Float!) {
    toggleApply(args: { postId: $postId }) {
      ok
    }
  }
`;

export const HANDLE_APPLICATION = gql`
  mutation handleApplication($postId: Float!, $status: String!) {
    handleApplication(args: { postId: $postId, status: $status }) {
      ok
    }
  }
`;

export const GET_POST_DETAIL = gql`
  query getPostDetail($postId: Float!) {
    getPostDetail(args: { postId: $postId }) {
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
      applications {
        id
        createdAt
        user {
          id
          avatar
          username
        }
      }
    }
  }
`;
