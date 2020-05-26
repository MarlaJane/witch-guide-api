/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { postedMonth, singleMonth, monthList } = require('../mocks/months')
const { getAllMonths, getMonthByName, getMonthByMoon, getMonthBySlug, addMonth } = require('../../controllers/months')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - months', () => {
  describe('getAllMonths', () => {
    it('retrieves a list of months from the database and calls response.send() with the list', async () => {
      const stubbedFindAll = sinon.stub(models.months, 'findAll').returns(monthList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllMonths({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(monthList)
    })
  }),

    describe('getMonthByName', () => {
      it('retrieves the month associated with the provided name from the database and calls response.send() with it', async () => {
        const request = { params: { name: 'January' } }
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
        const stubbedFindOne = sinon.stub(models.months, 'findOne').returns(singleMonth)

        await getMonthByName(request, response)
        expect(stubbedFindOne).to.have.been.calledWith({ where: { name: 'January' } })
        expect(stubbedSend).to.have.been.calledWith(singleMonth)
      })
    }),

    describe('getMonthByMoon', () => {
      it('retrieves the month associated with the provided moon from the database and calls response.send() with it', async () => {
        const request = { params: { moon: 'Wolf' } }
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
        const stubbedFindOne = sinon.stub(models.months, 'findOne').returns(singleMonth)

        await getMonthByMoon(request, response)

        expect(stubbedFindOne).to.have.been.calledWith({ where: { moon: 'Wolf' } })
        expect(stubbedSend).to.have.been.calledWith(singleMonth)
      })
    }),

    describe('getMonthBySlug', () => {
      it('retrieves the month associated with the provided name from the database and calls response.send() with it', async () => {
        const request = { params: { slug: 'jan' } }
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
        const stubbedFindOne = sinon.stub(models.months, 'findOne').returns(singleMonth)

        await getMonthBySlug(request, response)

        expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'jan' } })
        expect(stubbedSend).to.have.been.calledWith(singleMonth)
      })
    }),

    describe('newMonth', () => {
      it('accepts new month details and saves them as a new month in the database, returning the saved record with a 201 status', async () => {
        const request = { body: postedMonth }
        const stubbedSend = sinon.stub()
        const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
        const response = { status: stubbedStatus }
        const stubbedCreate = sinon.stub(models.months, 'create').returns(singleMonth)

        await newMonth(request, response)

        expect(stubbedCreate).to.have.been.calledWith(postedMonth)
        expect(stubbedStatus).to.have.been.calledWith(201)
        expect(stubbedSend).to.have.been.calledWith(singleMonth)
      })
    })
})