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
        post {
          id
          title
          description
          category
          date
          rigion
          host
          isOpened
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
        }
      }
    }
  }
`;
