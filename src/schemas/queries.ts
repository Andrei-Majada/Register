import { gql } from 'apollo-server-express';

export default gql`

    type Query {

        hello: Boolean

        listUsers: [User]
        
        showUser(
            userId: Int
        ): User

        listAdminRegister(
            userId: Int
        ): [RegisteredTime]

        listEmployeeRegister(
            userId: Int
        ): [RegisteredTime]

    }
`;
