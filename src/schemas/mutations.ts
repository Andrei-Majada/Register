import { gql } from 'apollo-server-express';

export default gql`

    type Mutation {

        createUser(
            name: String!
            email: String!
            password: String!
            role: String!
        ): User

        createRegister(
            timeRegistered: String!
        ): RegisteredTime
    }
`;
