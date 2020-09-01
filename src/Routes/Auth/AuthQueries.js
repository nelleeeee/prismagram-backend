import { gql } from "apollo-boost";

export const LOG_IN = gql`
  mutation requestSecret($email: Strin!) {
    requestSecret(email: $email)
  }
`;
