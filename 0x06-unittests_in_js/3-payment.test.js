const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

const { expect } = chai;

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM and the correct arguments', () => {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;

        spy.restore();
    });
});
