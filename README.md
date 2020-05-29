# Back-end-candidate-test
### Tech
 * [typescript]
 * [docker]
 
## Global Dependencies
- node >= 11

###Config Project
1. Create config files
```sh
    $ cp .env.example .env
```
```sh
    $ cp client/.env.example client/.env.local
```
## Run project
```sh
    $ sudo docker-compose up
```
http://localhost:9000/ - minio bucket

http://localhost:3001/graphql - graphql

http://localhost:3000 - front 

## Run project without docker
### Dependencies
Install server dependencies
```sh
    $ npm install
```
Install client dependencies
```sh
    $ npm --prefix client/ install
```
### Compile
1. Build client
```sh
    $ npm --prefix client/ run build:local
```
## Launch
```sh
    $ npm start
```
*Note: Root project folder must be cwd (current working directory) to resolve configuration files correctly. You cannot launch application from `dist` folder`.*

#### Request
Save data to the file
```sh
mutation {
  saveToTheFile(filename: "files.txt", data: "777") {
    url
  }
}
```
*Note: api create file or add info to existing one
url - url to the file in storage 

Get product
```sh
 {
    products {
        id
        program_id
        start
        end
        price
    }
  }
```

Get users
```sh
{
    users {
      id
      name
      created
    }
  }
```

 Get programs
```sh
   {
     programs {
       id
       title
     }
   }
```

Get transactions
```sh
  {
    transactions {
      id
      timestamp
      product_id
      user_id
    }
  }
```
[typescript]: <https://www.typescriptlang.org/>
[docker]: <https://docs.docker.com//>

