import { gql } from "apollo-boost";

export const LOCAL_LOG_OUT = gql`
  mutation localSignOut {
    localSignOut @client
  }
`;

export const GET_PROFILE = gql`
  query getProfile($userId: Float!) {
    getProfile(args: { userId: $userId }) {
      isSelf
      user {
        id
        email
        username
        avatar
        activityCount
        activityTime
        posts {
          id
          title
          description
          category
          date
          rigion
          host
          isOpened
          isCompleted
          NumOfRecruitment
          recognizedHours
        }
        certificates {
          id
          title
          host
          recognizedHours
          date
        }
      }
      applications {
        id
        status
        createdAt
        post {
          id
          title
          description
          category
          date
          rigion
          host
          isOpened
          isCompleted
          recognizedHours
        }
      }
      likes {
        id
        createdAt
        post {
          id
          title
          description
          category
          date
          rigion
          host
          isOpened
          isCompleted
          recognizedHours
        }
      }
    }
  }
`;

export const EDIT_AVATAR = gql`
  mutation editAvatar($avatarKey: String!) {
    editAvatar(args: { avatarKey: $avatarKey }) {
      ok
    }
  }
`;
