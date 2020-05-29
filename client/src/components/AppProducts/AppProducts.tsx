import React from 'react';
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const GET_PRODUCTS = gql`
  {
    products {
        id
        program_id
        start
        end
        price
    }
  }
`

const Product = ({ product: { id, program_id, start, end, price } }: any) => (
    <div className="Card">
        <div>
            <h1>{ id }</h1>
            <div>Program: { program_id }</div>
            <div>{ start } - { end }</div>
            <div>Price: { price }</div>
        </div>
    </div>
);

function AppProducts() {
    const { loading, error, data } = useQuery(GET_PRODUCTS)

    if (error) return <h1>Something went wrong!</h1>
    if (loading) return <h1>Loading...</h1>

    return (
        <div className="App">
            <h1>Products</h1>
            {data.products.map((product: any) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
}

export default AppProducts;
