import React from 'react';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_TRANSACTIONS= gql`
  {
    transactions {
      id
      timestamp
      product_id
      user_id
    }
  }
`

const Transaction = ({ transaction: { id, timestamp, product_id, user_id } }: any) => (
    <div className="Card">
        <div>
            <h1 className="Card--name">{ id }</h1>
            <div>{ timestamp }</div>
            <div>Product: { product_id }</div>
            <div>User: { user_id }</div>
        </div>
    </div>
);

function AppTransactions() {
    const { loading, error, data } = useQuery(GET_TRANSACTIONS)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <h1>Transactions</h1>
            {data.transactions.map((transaction: any) => (
                <Transaction key={transaction.id} transaction={transaction} />
            ))}
        </div>
    );
}

export default AppTransactions;
