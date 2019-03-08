const request = require('supertest');
const server = require('./server');

describe('games', () => {
  describe('get', () => {
    it('should see if server is working', () => {
      return request(server)
        .get('/')
        .then(res => expect(res.status).toBe(200))
        .catch();
    });
    it('should get all games with status 200', () => {
      return request(server)
        .get('/games')
        .then(res => expect(res.status).toBe(200))
        .catch();
    });
    it('should check if get all games returns an array with length of 5', () => {
      return request(server)
        .get('/games')
        .then(res => expect(JSON.parse(res.text)).toHaveLength(5))
        .catch();
    });
    it('should get game by ID and give 200', () => {
      return request(server)
        .get('/games/1')
        .then(res => expect(res.status).toBe(200))
        .catch();
    });
    it('should check if gameById returns a name', () => {
      return request(server)
        .get('/games/1')
        .then(res =>
          expect(JSON.parse(res.text)[0].name).toBe('Counter Strike')
        )
        .catch();
    });
  });
});
