const request = require('request');
const { expect } = require('chai');
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
});

describe('Cart page', () => {
  it('should return status 200 for valid cart ID', (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message for valid cart ID', (done) => {
    request.get(`${baseUrl}/cart/12`, (err, res, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 for invalid cart ID (not a number)', (done) => {
    request.get(`${baseUrl}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Available payments endpoint', () => {
  it('should return the correct payment methods object', (done) => {
    request.get(`${baseUrl}/available_payments`, { json: true }, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should return a welcome message with userName', (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        json: { userName: 'Betty' },
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      }
    );
  });

  it('should return 400 if userName is missing', (done) => {
    request.post(
      {
        url: `${baseUrl}/login`,
        json: {},
      },
      (err, res, body) => {
        expect(res.statusCode).to.equal(400);
        expect(body).to.equal('Missing userName');
        done();
      }
    );
  });
});
