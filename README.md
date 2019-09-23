# todo-list-api

Node REST api using [Express](hhttps://github.com/expressjs/express) framework and [Mongoose](https://github.com/Automattic/mongoose) ODM.


## Requirements
Node.js 6.x, Docker, Docker-Compose

## Installation
```
npm install
```

## Run Build
```
npm run build
```

## Run Database(MongoContainer)
If you don't have mongo image instaled on your system
```
docker pull mongo
```
then
```
docker-compose up -d  mongo
```

## Run Tests
```
npm test
```

## Run App (Dev mode)
```
npm run dev
```

## Run App (Container and Mongo)
```
docker-compose up
```

## API
Will be available on http://localhost:3000
```
Read all tasks
GET /todo
```
```
Read a task by pass the id
GET /todo/:id
```
```
Create a task
POST /todo
```
```
Update a task
PUT /todo/:id
```
```
Delete a task
DELETE /todo/:id
```
```
Return current status of the components
GET /healthcheck
```
```
Return performance indicators
GET /metrics
```
