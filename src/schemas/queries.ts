import { gql } from 'apollo-server-express';

export default gql`

    type Query {

        hello: Boolean

        listUsers: [User]
        
        showUser(
            userId: Int
        ): User

        listAdminRegister: [RegisteredTime]

        listEmployeeRegister(
            userId: Int
        ): [RegisteredTime]

    }
`;
