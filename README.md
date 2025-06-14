# Backend Challenge

### Features

- Create new Users with their Pokemon Ids
- Get Users list
- Get User by Id and also gathering Pokemon Names from Poke API
- Update User
- Delete User

## Deployed App Running on HEROKU

- [SWAGGER](https://backend-nestjs-challenge-3336a6f13c46.herokuapp.com/api)

### Badges

[![CircleCI](https://dl.circleci.com/status-badge/img/circleci/8k3vizU2BZP5r14QonA4hL/DU3GjxSXf6fxSPgerPXTW8/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/circleci/8k3vizU2BZP5r14QonA4hL/DU3GjxSXf6fxSPgerPXTW8/tree/main)

[![Coverage Status](https://coveralls.io/repos/github/emiliobongiorno/backend-nestjs-challenge/badge.svg?branch=main)](https://coveralls.io/github/emiliobongiorno/backend-nestjs-challenge?branch=main)

## Pre-Requisites

- Docker installed without SUDO Permission
- Docker compose installed without SUDO
- Ports free: 3000 and 5432

## How to run the APP Locally

```
chmod 711 ./up_dev.sh
./up_dev.sh
```

Env vars should be defined. To find an example of the values you can use .env.example

## How to run the tests

```
chmod 711 ./up_test.sh
./up_test.sh
```

## How to run locally coveralls

```
COVERALLS_REPO_TOKEN=0odFzvVSUSJTqcPrD90UZNzJF3ipE13TU npm run test:cov
```

## Areas to improve

- Data should be moved from tests to an external file
- Generic method should be used to mock endpoints
- Error handling could be improved (I.E handle already existing user error)
- Coveralls token should not be included in git

## Techs

- Nest: 11
- Node: v22.16.0
- TypeORM
- Postgres

## Decisions made

- Clean Architecture: To be able to handle further changes in the future in a proper way.
- TypeORM: Because it is the already integrated ORM in the Nest Framework and it is the most popular ORM so it is easy to find fixes and people that know how to use it
- Docker: To make portable
- Jest/Testing/E2E: Jest is the most used testing framework of JS. Same argument as above. E2E testing was done because it is useless to always test every single part. That's why if the controller provide the proper answer the test has passed.

## Route

- Local: [API Swagger](http://localhost:3000/api)
