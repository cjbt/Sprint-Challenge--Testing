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
    it('should check if get all games returns an array', () => {
      return request(server)
        .get('/games')
        .then(res => expect(res.body.length).toBeGreaterThan(0))
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
        .then(res => expect(res.body[0].name).toBe('Counter Strike'))
        .catch();
    });
  });
  describe('post', () => {
    it('should recieve 201 on post', () => {
      return request(server)
        .post('/games')
        .send({ name: 'Lunia Online' })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
    it('should return recent addition', () => {
      return request(server)
        .post('/games')
        .send({ name: 'Runescape' })
        .then(res => {
          expect(res.body[res.body.length - 1].name).toBe('Runescape');
        });
    });
    it('should return 422 if body is not provided', () => {
      return request(server)
        .post('/games')
        .send()
        .then(res => expect(res.status).toBe(422));
    });
  });
});
