const data = {
    "programs": [
        {
            "id": "program1",
            "title": "Harry Potter and the Chamber of Secrets"
        },
        {
            "id": "program2",
            "title": "Jurassic Park"
        }
    ],
    "products": [
        {
            "id": "product1",
            "program_id": "program1",
            "start": "2018-07-01",
            "end": "2019-06-30",
            "price": 129
        },
        {
            "id": "product2",
            "program_id": "program1",
            "start": "2019-07-01",
            "end": "2020-06-30",
            "price": 99
        },
        {
            "id": "product3",
            "program_id": "program2",
            "start": "2018-01-01",
            "end": "2021-12-31",
            "price": 69
        }
    ],
    "transactions": [
        {
            "id": "transaction1",
            "timestamp": "2019-01-12T21:01:23",
            "product_id": "product1",
            "user_id": "user1"
        },
        {
            "id": "transaction2",
            "timestamp": "2019-01-19T20:35:32",
            "product_id": "product3",
            "user_id": "user1"
        },
        {
            "id": "transaction3",
            "timestamp": "2019-01-21T15:31:45",
            "product_id": "product1",
            "user_id": "user2"
        }
    ],
    "users": [
        {
            "id": "user1",
            "name": "Bill Nye",
            "created": "2019-01-12T20:03:01"
        },
        {
            "id": "user2",
            "name": "Carl Sagan",
            "created": "2019-01-20T12:54:04"
        },
        {
            "id": "user3",
            "name": "Neil deGrasse Tyson",
            "created": "2019-02-03T15:43:34"
        }
    ]
};

export default data;