const request = require('supertest');
const app = require('./http-server');

describe('GET /', () => {
  it('should display "Hello World" on the main page', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello World');
  });
});
