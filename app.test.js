const app = require('./app');
const nock = require('nock');
const request = require('supertest');
it('get activity', async () => {
    const mockResponse = { 
      activity:"Play soccer",
      type:"sports",
      participants:22,
      price:0,
      link:"",
      key:"1638604",
      accessibility:0.2
    };
    nock('https://www.boredapi.com/api')
        .get('/activity')
        .reply(200, mockResponse);
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockResponse);
});