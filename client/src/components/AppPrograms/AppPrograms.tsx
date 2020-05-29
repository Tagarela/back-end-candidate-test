import React from 'react';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_PROGRAMS = gql`
  {
    programs {
      id
      title
    }
  }
`

const Program = ({ program: { id, title } }: any) => (
    <div className="Card">
        <div>
            <h1 className="Card--name">{ id }</h1>
            <div>Title: { title }</div>
        </div>
    </div>
);

function AppPrograms() {
    const { loading, error, data } = useQuery(GET_PROGRAMS)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <h1>Programs</h1>
            {data.programs.map((program: any) => (
                <Program key={program.id} program={program} />
            ))}
        </div>
    );
}

export default AppPrograms;
