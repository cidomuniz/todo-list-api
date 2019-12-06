# todo-list-api

Node REST api using [Express](https://github.com/expressjs/express) framework and [Mongoose](https://github.com/Automattic/mongoose) ODM.

1. [ Requirements. ](#req)
2. [ API. ](#api)
2. [ Live test. ](#live)

<a name="req"></a>
## Requirements
Node.js 6.x, Docker, Docker-Compose

### Installation
```
npm install
```

#### Run Database(MongoContainer)
```
docker-compose up -d  mongo
```

#### Run Tests
```
npm test
```

#### Run App (Container and Mongo)
```
docker-compose up
```
<a name="api"></a>
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
{
        "name": "example of a task"
}
```
```
Update a task
PUT /todo/:id
{
        "status": {"pending", "completed"}
        "name": "example of a updated task",
        "created_date": "2019-09-23T22:18:32.134Z"
}
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
