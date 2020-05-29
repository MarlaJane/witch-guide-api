
/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, beforeEach, describe, it,
} = require('mocha')
const { singleMoon, moonList } = require('../mocks/moons')
const {
  getAllMoons,
  getMoonByName,
  getMoonByMonth,
} = require('../../controllers/moons')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - moons', () => {
  let response
  let sandbox
  let stubbedMoonsFindOne
  let stubbedMoonsFindAll
  let stubbedStatusSend

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    stubbedStatusSend = sandbox.stub()

    response = {
      send: sandbox.stub(),
      status: sandbox.stub().returns({ send: stubbedStatusSend }),
      sendStatus: sandbox.stub(),
    }

    stubbedMoonsFindOne = sandbox.stub(models.Moons, 'findOne')
    stubbedMoonsFindAll = sandbox.stub(models.Moons, 'findAll')
  })

  after(() => {
    sandbox.reset()
  })

  afterEach(() => {
    sandbox.restore
  })

  describe('Moons', () => {
    describe('getAllMoons', () => {
      it('retrieves a list of moons', async () => {
        const stubbedMoonsFindAll = sinon.stub(models.Moons, 'findAll').returns(moonList)

        await getAllMoons({}, response)

        expect(stubbedMoonsFindAll).to.have.been.calledWith({ include: [{ model: models.Moons }] })
        expect(response.send).to.have.been.calledWith(moonList)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMoonsFindAll.throws('Error!')

        await getAllMoons({}, response)

        expect(stubbedMoonsFindAll).to.have.been.calledWith({ include: [{ model: models.Moons }] })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getMoonByName', () => {
      it('retrieves the moons associated with the provided name', async () => {
        stubbedMoonsFindOne.returns(singleMoon)

        const request = { params: { name: 'Wolf' } }

        await getMoonByName(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { name: 'Wolf' }
        })
        expect(response.send).to.have.been.calledWith(singleMoon)
      })
      it('returns a 404 error when no month is found', async () => {
        stubbedMoonsFindOne.returns(null)

        const request = { params: { name: 'Wolf' } }

        await getMoonByName(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { name: 'Wolf' },
          include: [{ model: models.Moons }],
        })
        expect(response.sendStatus).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMoonsFindOne.throws('Error!')

        const request = { params: { name: 'Wolf' } }

        await getMoonByName(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { name: 'Wolf' },
          include: [{ model: models.Moons }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getMoonByMonth', () => {
      it('retrieves the moon associated with the provided month', async () => {
        stubbedMoonsFindOne.returns(singleMoon)

        const request = { params: { monthId: 1 } }

        await getMoonByMonth(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Moons }],
        })
        expect(response.send).to.have.been.calledWith(singleMoon)
      })
      it('returns a 404 error when no moon is found', async () => {
        stubbedMoonsFindOne.returns(null)

        const request = { params: { monthId: 1 } }

        await getMoonByMonth(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Moons }],
        })
        expect(response.status).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedMoonsFindOne.throws('Error!')

        const request = { params: { monthId: 1 } }

        await getMoonByMonth(request, response)

        expect(stubbedMoonsFindOne).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Moons }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })
  })
})
