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


[typescript]: <https://www.typescriptlang.org/>
[docker]: <https://docs.docker.com//>

