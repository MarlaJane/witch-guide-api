/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  after, afterEach, beforeEach, describe, it
} = require('mocha')
const { postedActivity, singleActivity, relatedActivities, activitiesList } = require('../mocks/activities')
const {
  getAllActivities,
  getActivitiesByMonth,
  getActivitiesByMoon,
  addActivities,
  deleteActivities,
} = require('../../controllers/activities')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - activities', () => {
  let response
  let sandbox
  let stubbedActivitiesDestroy
  let stubbedActivitiesFindOne
  let stubbedActivitiesFindOrCreate
  let stubbedActivitiesFindAll
  let stubbedActivitiesFilter
  let stubbedStatusSend

  beforeEach(() => {
    sandbox = sinon.createSandbox()

    stubbedStatusSend = sandbox.stub()

    response = {
      send: sandbox.stub(),
      status: sandbox.stub().returns({ send: stubbedStatusSend }),
      sendStatus: sandbox.stub(),
    }

    stubbedActivitiesFindOrCreate = sandbox.stub(models.Activities, 'findOrCreate')
    stubbedActivitiesDestroy = sandbox.stub(models.Activities, 'destroy')
    stubbedActivitiesFindOne = sandbox.stub(models.Activities, 'findOne')
    stubbedActivitiesFindAll = sandbox.stub(models.Activities, 'findAll')
  })

  after(() => {
    sandbox.reset()
  })

  afterEach(() => {
    sandbox.restore
  })

  describe('Activities', () => {
    describe('getAllActivities', () => {
      it('retrieves a list of activities', async () => {
        const stubbedActivitiesFindAll = sinon.stub(models.activities, 'findAll').returns(activitiesList)

        await getAllActivities({}, response)

        expect(stubbedActivitiesFindAll).to.have.been.calledWith({ include: [{ model: models.Activities }] })
        expect(response.send).to.have.been.calledWith(activitiesList)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedActivitiesFindAll.throws('Error!')

        await getAllActivities({}, response)

        expect(stubbedActivitiesFindAll).to.have.been.calledWith({ include: [{ model: models.Activities }] })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getActvitiesByMoon', () => {
      it('retrieves the activities associated with the provided moon', async () => {
        stubbedActivitiesFilter.returns(relatedActivities)

        const request = { params: { moonId: 1 } }

        await getActivitiesByMoon(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { moonId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.send).to.have.been.calledWith(relatedActivities)
      })
      it('returns a 404 error when no moon is found', async () => {
        stubbedActivitiesFilter.returns(null)

        const request = { params: { moonId: 1 } }

        await getActivitiesByMoon(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { moonId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.status).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedActivitiesFilter.throws('Error!')

        const request = { params: { moonId: 1 } }

        await getActivitiesByMoon(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { moonId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('getActvitiesByMonth', () => {
      it('retrieves the activities associated with the provided month', async () => {
        stubbedActivitiesFilter.returns(relatedActivities)

        const request = { params: { monthId: 1 } }

        await getActivitiesByMonth(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.send).to.have.been.calledWith(relatedActivities)
      })
      it('returns a 404 error when no moon is found', async () => {
        stubbedActivitiesFilter.returns(null)

        const request = { params: { monthId: 1 } }

        await getActivitiesByMonth(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.status).to.have.been.calledWith(404)
      })
      it('returns a 500 error when call fails', async () => {
        stubbedActivitiesFilter.throws('Error!')

        const request = { params: { monthId: 1 } }

        await getActivitiesByMoon(request, response)

        expect(stubbedActivitiesFilter).to.have.been.calledWith({
          where: { monthId: 1 },
          include: [{ model: models.Activities }],
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while retrieving.')
      })
    })

    describe('deleteActivities', () => {
      it('responds with success message when activity is deleted', async () => {
        stubbedActivitiesFindOne.returns(singleActivity)

        const request = { params: { id: 1 } }

        await deleteActivities(request, response)

        expect(stubbedActivitiesFindOne).to.have.been.calledWith({ where: { id: 1 } })
        expect(stubbedActivitiesDestroy).to.have.been.calledWith({ where: { id: 1 } })
        expect(response.send).to.have.been.calledWith('Successfully deleted.')
      })
      it('returns a 404 error when no activity is found', async () => {
        stubbedActivitiesFindOne.returns(null)

        const request = { params: { id: 1 } }

        await deleteActivities(request, response)

        expect(stubbedActivitiesFindOne).to.have.been.calledWith({ where: { id: 1 } })
        expect(stubbedActivitiesDestroy).to.have.callCount(0)
        expect(response.status).to.have.been.calledWith(404)
        expect(stubbedStatusSend).to.have.been.calledWith('Unknown activity')
      })

      it('responds with 500 message when call fails', async () => {
        stubbedActivitiesFindOne.returns(singleActivity)
        stubbedActivitiesDestroy.throws('Error!')

        const request = { params: { id: 1 } }

        await deleteActivities(request, response)

        expect(stubbedActivitiesFindOne).to.have.been.calledWith({ where: { id: 1 } })
        expect(stubbedActivitiesDestroy).to.have.been.calledWith({ where: { id: 1 } })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error while deleting.')
      })
    })
    describe('addActivities', () => {
      it('returns a 201 with the new activity once added', async () => {
        stubbedActivitiesFindOrCreate.returns(postedActivity)

        const request = {
          body: {
            name: 'lucet and cord weaving',
            moonId: 1,
            monthId: 1,
          }
        }

        await addActivities(request, response)

        expect(stubbedActivitiesFindOrCreate).to.have.been.calledWith({
          name: 'lucet and cord weaving',
          moonId: 1,
          monthId: 1,
        })
        expect(response.status).to.be.calledWith(201)
        expect(stubbedStatusSend).to.be.calledWith(postedActivity)
      })

      it('returns a 404 error when data is missing', async () => {
        const request = { params: { name: 'lucet and cord weaving' } }

        await addActivities(request, response)

        expect(stubbedActivitiesFindOrCreate).to.have.callCount(0)
        expect(response.status).to.have.been.calledWith(404)
        expect(stubbedStatusSend).to.have.been.calledWith('Missing required data')
      })

      it('responds with 500 message when call fails', async () => {
        stubbedActivitiesFindOrCreate.throws('Error!')

        const request = {
          body: {
            name: 'lucet and cord weaving',
            moonId: 1,
            monthId: 1,
          }
        }

        await addActivities(request, response)

        expect(stubbedActivitiesFindOrCreate).to.have.been.calledWith({
          name: 'lucet and cord weaving',
          moonId: '1',
          monthId: '1',
        })
        expect(response.status).to.have.been.calledWith(500)
        expect(stubbedStatusSend).to.have.been.calledWith('Error')
      })
    })
  })
})
