import { gql } from 'apollo-server-express';

export default gql`

    type Mutation {

        """
        Create user mutation, used to create new user into the company database.
        """
        createUser(
            """
            User name, only first and last name.
            """
            name: String!
            """
            User email used for login.
            """
            email: String!
            """
            User password used for login saved in database after encrypted.
            """
            password: String!
            """
            User role saved as string because can have many.
            """
            role: String!
        ): User

        """
        Create register mutation, used to create new registries from an user into the company database.
        """
        createRegister(
            """
            Entry or Exit Time.
            """
            timeRegistered: String!
        ): RegisteredTime

        """
        Login mutation, used to authenticate an user.
        """
        login(
            """
            User email.
            """
            email: String
            """
            User password.
            """
            password: String
        ): Login
    }
`;
