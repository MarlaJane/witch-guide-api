/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, beforeEach, describe, it,
} = require('mocha')
const { singleMonth, monthList } = require('../mocks/months')
const {
  getAllMonths,
  getMonthByName,
  getMonthBySlug,
} = require('../../controllers/months')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - months', () => {
  let response
  let sandbox
  let stubbedMonthsFindOne
  let stubbedMonthsFindAll
  let stubbedStatusSend

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    stubbedStatusSend = sandbox.stub()

    response = {
      send: sandbox.stub(),
      status: sandbox.stub().returns({ send: stubbedStatusSend }),
      sendStatus: sandbox.stub(),
    }

    stubbedMonthsFindOne = sandbox.stub(models.Months, 'findOne')
    stubbedMonthsFindAll = sandbox.stub(models.Months, 'findAll')
  })

  after(() => {
    sandbox.reset()
  })

  afterEach(() => {
    sandbox.restore
  })

  describe('Months', () => {
    describe('getAllMonths', () => {
      it('retrieves a list of months', async () => {
        const stubbedMonthsFindAll = sinon.stub(models.Months, 'findAll').returns(monthList)

        await getAllMonths({}, response)

        expect(stubbedMonthsFindAll).to.have.been.calledWith({ include: [{ model: models.Months }] })
        expect(response.send).to.have.been.calledWith(monthList)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMonthsFindAll.throws('Error!')

        await getAllMonths({}, response)

        expect(stubbedMonthsFindAll).to.have.been.calledWith({ include: [{ model: models.Months }] })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getMonthByName', () => {
      it('retrieves the Months associated with the provided name', async () => {
        stubbedMonthsFindOne.returns(singleMonth)

        const request = { params: { name: 'January' } }

        await getMonthByName(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { name: 'January' }
        })
        expect(response.send).to.have.been.calledWith(singleMonth)
      })
      it('returns a 404 error when no month is found', async () => {
        stubbedMonthsFindOne.returns(null)

        const request = { params: { name: 'January' } }

        await getMonthByName(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { name: 'January' },
          include: [{ model: models.Months }],
        })
        expect(response.sendStatus).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMonthsFindOne.throws('Error!')

        const request = { params: { name: 'January' } }

        await getMonthByName(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { name: 'January' },
          include: [{ model: models.Months }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getMonthBySlug', () => {
      it('retrieves the months associated with the provided slug', async () => {
        stubbedMonthsFindOne.returns(singleMonth)

        const request = { params: { slug: 'jan' } }

        await getMonthBySlug(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { slug: 'jan' },
          include: [{ model: models.Months }],
        })
        expect(response.send).to.have.been.calledWith(singleMonth)
      })
      it('returns a 404 error when no moon is found', async () => {
        stubbedMonthsFindOne.returns(null)

        const request = { params: { slug: 'jan' } }

        await getMonthBySlug(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { slug: 'jan' },
          include: [{ model: models.Months }],
        })
        expect(response.status).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMonthsFindOne.throws('Error!')

        const request = { params: { slug: 'jan' } }

        await getMonthBySlug(request, response)

        expect(stubbedMonthsFindOne).to.have.been.calledWith({
          where: { slug: 'jan' },
          include: [{ model: models.Months }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })
  })
})
