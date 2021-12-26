import { gql } from 'apollo-server-express';

export default gql`

    type Query {

        hello: Boolean

        login(
            email: String
            password: String
        ): Login

        listAdminRegister: [RegisteredTime]

        listEmployeeRegister: [RegisteredTime]

    }
`;
