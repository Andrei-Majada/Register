import { gql } from 'apollo-server-express';

export default gql`

    type Query {
        """
        Returns a list of records for all employees.
        Can only be used by administrator passing a JWT access token through context.
        """
        listAdminRegister: [RegisteredTime]
        
        """
        Returns a list of records from the authenticated user only.
        Can only be used by the employee passing a JWT access token through the context.
        """
        listEmployeeRegister: [RegisteredTime]

    }
`;
