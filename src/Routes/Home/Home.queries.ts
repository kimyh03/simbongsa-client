import { gql } from "apollo-boost";

export const GET_POSTS = gql`
  query getPosts(
    $categories: [postCategory!]!
    $rigions: [postRigion!]!
    $page: Float!
    $openOnly: Boolean!
    $searchTerm: String!
  ) {
    getPosts(
      input: {
        categories: $categories
        rigions: $rigions
        page: $page
        openOnly: $openOnly
        searchTerm: $searchTerm
      }
    ) {
      posts {
        id
        title
        description
        category
        rigion
        date
        host
        adress
        recognizedHours
        isOpened
        isCompleted
        NumOfRecruitment
        applications {
          id
        }
      }
      totalCount
      totalPage
    }
  }
`;
