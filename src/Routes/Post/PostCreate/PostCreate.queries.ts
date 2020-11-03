import { gql } from "apollo-boost";
import {} from "../../../Entities/Post.entity";

export const CREAT_POST = gql`
  mutation createPost(
    $title: String!
    $description: String!
    $adress: String!
    $host: String!
    $numOfRecruitment: Float!
    $recognizedHours: Float!
    $date: DateTime!
    $category: postCategory!
    $rigion: postRigion!
  ) {
    createPost(
      args: {
        title: $title
        description: $description
        adress: $adress
        host: $host
        NumOfRecruitment: $numOfRecruitment
        recognizedHours: $recognizedHours
        date: $date
        category: $category
        rigion: $rigion
      }
    ) {
      ok
    }
  }
`;
