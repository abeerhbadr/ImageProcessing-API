import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint response', () => {
  it('gets the api/images endpoint', async () => {
    const res = request.get(
      '/api/images?filename=fjord.jpg&width=300&height=300'
    );
    expect((await res).status).toBe(200);
  });
});
