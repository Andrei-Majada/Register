import { gql } from 'apollo-server-express';

export default gql`

    """
    User type, contains all attributes for transactions with users.
    """
    type User {
        """
        User id auto generated by typeorm.
        """
        id: ID
        """
        User name.
        """
        name: String
        """
        User email used for login.
        """
        email: String
        """
        User password used for login saved in database after encrypted.
        """
        password: String
        """
        User role saved as string because can have many.
        """
        role: String
        """
        Timestamps from when the user was created.
        """
        createdAt: String
        """
        Timestamps from when the user was deleted.
        """
        deleteAt: String
    }

    """
    RegisteredTime type, contains all attributes for transactions with registries.
    """
    type RegisteredTime {
        """
        Register id auto generated by typeorm.
        """
        id: ID
        """
        User id used for reference.
        """
        userId: Int
        """
        User name from employee.
        """
        username: String
        """
        Entry or Exit Time.
        """
        timeRegistered: String
    }

    """
    Login type, contains all user info for authentication.
    """
    type Login {
        """
        User name.
        """
        name: String
        """
        User email.
        """
        email: String
        """
        User role.
        """
        role: String
        """
        JWT authentication token.
        """
        token: String
    }

`;