import React, { useEffect, useState } from 'react';
import { useQuery, gql } from "@apollo/client"
import { LOAD_USERS } from "../Graphql/Queries";

const GetUsers = () => {

    const { error, loading, data } = useQuery(LOAD_USERS);
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        if(data) {
            setUsers(data.getAllUsers);
            console.log(users)
        }
    }, [data]);

    return (
        <div>
            {/* {users && users.map(user => (
                <h4>
                    {user.firstName}
                </h4>
            ))} */}
        </div>
    )
}

export default GetUsers
