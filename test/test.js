const request = require('supertest');
const app = require('../app');


describe('GET /health', function () {
it('returns status ok', function (done) {
request(app)
.get('/health')
.expect('Content-Type', /json/)
.expect(200, { status: 'ok' }, done);
});
});