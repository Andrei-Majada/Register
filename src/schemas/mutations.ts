import { gql } from 'apollo-server-express';

export default gql`

    type Mutation {

        createUser(
            name: String!
            email: String!
            password: String!
            role: String!
        ): User

        updateUser(
            userId: Int
            name: String
            email: String
            password: String
            role: String
        ): User

        destroyUser(
            userId: Int
        ): Boolean

        createRegister(
            userId: Int!
            timeRegistered: String!
        ): RegisteredTime

        updateRegister(
            registerId: Int!
            userId: Int
            timeRegistered: String!
        ): RegisteredTime

        destroyRegister(
            registerId: Int
        ): Boolean
    }
`;
