const { expect } = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let stub;
    let consoleSpy;

    beforeEach(() => {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        stub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM, 100, 20 and log" The total is 10"', () => {
        sendPaymentRequestToApi(100, 20);

        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
    });
});
