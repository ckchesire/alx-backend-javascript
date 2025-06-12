const chai = require('chai');
const request = require('request');
const expect = chai.expect;
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
    it('should return status 200', (done) => {
        request.get(`${baseUrl}/`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            done();
        });
    });
    
    it('should return "Welcome to the payment system"', (done) => {
        request.get(`${baseUrl}/`, (err, res, body) => {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should respond with correct headers', (done) => {
        request.get(`${baseUrl}/`, (err, res, body) => {
            expect(res.headers['content-type']).to.include('text/html');
            done();
        });
    });
});
