import React from 'react';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_USERS = gql`
  {
    users {
      id
      name
      created
    }
  }
`

const User = ({ user: { id, name, created } }: any) => (
        <div className="Card" >
            <h1>{ id }</h1>
            <div>Name: { name }</div>
            <div>Created: { created }</div>
        </div>
);

function AppUsers() {
    const { loading, error, data } = useQuery(GET_USERS)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <h1>Users</h1>
            {data.users.map((user: any) => (
                <User key={user.id} user={user} />
            ))}
        </div>
    );
}

export default AppUsers;
