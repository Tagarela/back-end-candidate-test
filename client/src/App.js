import React from 'react';
import './App.css';
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

const User = ({ user: { id, name, created } }) => (
    <div className="Card">
      <div>
        <h1 className="Card--name">{ id }</h1>
        <div>{ name }</div>
        <div>{ created }</div>
      </div>
    </div>
);

function App() {
  const { loading, error, data } = useQuery(GET_USERS)

  if (error) return <h1>Something went wrong!</h1>
  if (loading) return <h1>Loading...</h1>

  return (
      <main className="App">
        <h1>Github | Users</h1>
        {data.users.map(user => (
            <User key={user.id} user={user} />
        ))}
      </main>
  );
}

export default App;
