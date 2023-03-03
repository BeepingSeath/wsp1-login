const app = require('../app');
const supertest = require('supertest');
const bcrypt = require('bcrypt');

describe('1. Setup', () => {
    describe('GET / ', () => {
        it('should return a 200 & 404 response', async () => {
            expect.assertions(2);
            const response = await supertest(app).get('/');
            expect(response.statusCode).toBe(200);
            expect(response.statusCode).toBe(404);
        });
    });
});
