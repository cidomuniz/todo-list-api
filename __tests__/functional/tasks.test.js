/* eslint-disable no-underscore-dangle */

const request = require('supertest');

const app = require('../../src/app');

describe('TODO', () => {
  it('should create a task and return json object with created task', async () => {
    const response = await request(app)
      .post('/todo')
      .send({
        name: 'Test Task',
      });

    expect(response.status).toBe(201);
    expect(response.type).toBe('application/json');
  });

  it('should not create a task', async () => {
    const response = await request(app)
      .post('/todo')
      .send();

    expect(response.status).toBe(500);
    expect(response.type).toBe('application/json');
  });

  it('should receive json object with a task filtered by id', async () => {
    const mockTask = {
      status: 'pending',
      name: 'tresMaria',
      created_date: '2019-09-22T04:50:40.875Z',
      __v: 0,
    };
    const taskCreated = await request(app)
      .post('/todo')
      .send(mockTask);

    const response = await request(app)
      .get(`/todo/${taskCreated.body._id}`)
      .send();

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body._id).toBe(taskCreated.body._id);
    expect(response.body.name).toBe(mockTask.name);
    expect(response.body.created_date).toBe(mockTask.created_date);
    expect(response.body.status).toBe(mockTask.status);
  });

  it('should not receive a task filtered by id and give an error', async () => {
    const taskCreated = await request(app)
      .post('/todo/xxx')
      .send();

    const response = await request(app)
      .get(`/todo/${taskCreated.body._id}`)
      .send();

    expect(response.status).toBe(500);
  });

  it('should receive json object with all tasks', async () => {
    const response = await request(app)
      .get('/todo')
      .send();

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
  });

  it('should update a task and return json object', async () => {
    const mockTask = {
      status: 'pending',
      name: 'QuatroMaria',
      created_date: '2019-09-22T04:50:40.875Z',
    };
    const taskCreated = await request(app)
      .post('/todo')
      .send(mockTask);

    const response = await request(app)
      .put(`/todo/${taskCreated.body._id}`)
      .send();

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body._id).toBe(taskCreated.body._id);
    expect(response.body.name).toBe(mockTask.name);
    expect(response.body.created_date).toBe(mockTask.created_date);
    expect(response.body.status).toBe(mockTask.status);
  });

  it('should not update a task and return not found', async () => {
    const response = await request(app)
      .put('/todo')
      .send();

    expect(response.status).toBe(404);
  });

  it('should not update a task and return an error', async () => {
    const response = await request(app)
      .put('/todo/xxx')
      .send();

    expect(response.status).toBe(500);
  });

  it('should delete a task', async () => {
    const mockTask = {
      status: 'pending',
      _id: '5d86e11f4e0afa2a0cf96d46',
      name: 'QuatroMaria',
      created_date: '2019-09-22T04:50:40.875Z',
      __v: 0,
    };
    await request(app)
      .post('/todo')
      .send(mockTask);

    const response = await request(app)
      .delete(`/todo/${mockTask._id}`)
      .send();

    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.body.msg).toBe('Successfully deleted');
  });

  it('should not delete a task', async () => {
    const response = await request(app)
      .delete('/todo')
      .send();

    expect(response.status).toBe(404);
  });

  it('should not delete a task an give an error', async () => {
    const response = await request(app)
      .delete('/todo/xxx')
      .send();

    expect(response.status).toBe(500);
  });
});
