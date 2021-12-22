import { gql } from 'apollo-server-express';

export default gql`

    type User {
        id: ID
        name: String
        email: String
        password: String
        role: String
        createdAt: String
        deleteAt: String
    }

    type RegisteredTime {
        id: ID
        userId: Int
        timeRegistered: String
    }

`;