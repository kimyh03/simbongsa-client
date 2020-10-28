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
          recognizedHours
        }
      }
    }
  }
`;
