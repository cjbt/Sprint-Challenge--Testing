const request = require('supertest');
const server = require('./server');

describe('users', () => {
  describe('get', () => {
    it('should see if server is working', () => {
      return request(server)
        .get('/')
        .then(res => expect(res.status).toBe(200))
        .catch();
    });
    it('should get all users with status 200', () => {
      return request(server)
        .get('./users')
        .then(res => expect(res.status).toBe(200));
    });
    it('should check if get all users gives back an array', () => {
      return request(server)
        .get('./users')
        .then(res => expect(res).toHaveLength(0));
    });
    it('should get user by ID and give 200', () => {
      return request(server)
        .get('./users/1')
        .then(res => expect(res.status).toBe(200));
    });
    it('should check if userById returns a name', () => {
      return request(server)
        .get('./users/i')
        .then(res => expect(res.name).toBe('CJ'));
    });
  });
});
