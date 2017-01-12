const expect = require('chai').expect
const sinon = require('sinon')

describe('processor', () => {
    describe('stateFilter', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
        })
        it('should match the same state', () => {
            expect(processor.stateFilter({ state: 'MN' })({ state: 'MN' })).to.be.true
        })
        it('should not match a different state', () => {
            expect(processor.stateFilter({ state: 'MN' })({ state: 'IL' })).to.be.false
        })
    })

    describe('cityFilter', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
        })
        it('should match the same city', () => {
            expect(processor.cityFilter({ city: 'Chicago' })({ name: 'Chicago' })).to.be.true
        })
        it('should not match a different city', () => {
            expect(processor.cityFilter({ city: 'Minneapolis' })({ name: 'Chicago' })).to.be.false
        })
    })

    describe('cityComparator', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
        })
        it('should sort recognize a lower population city', () => {
            const a = { population: 42 }
            const b = { population: 43 }
            expect(processor.cityComparator(a, b)).to.equal(1)
        })
        it('should sort recognize a higher population city', () => {
            const a = { population: 43 }
            const b = { population: 42 }
            expect(processor.cityComparator(a, b)).to.equal(-1)
        })
        it('should sort recognize equal population cities', () => {
            const a = { population: 42 }
            const b = { population: 42 }
            expect(processor.cityComparator(a, b)).to.equal(0)
        })
    })
    describe('stateComparator', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
        })
        it('should sort recognize a state with lower order name', () => {
            const a = { state: "IL" }
            const b = { state: "MN" }
            expect(processor.stateComparator(a, b)).to.equal(-1)
        })
        it('should sort recognize a state with higher order name', () => {
            const a = { state: "MN" }
            const b = { state: "IL" }
            expect(processor.stateComparator(a, b)).to.equal(1)
        })
        it('should sort recognize states with the same name', () => {
            const a = { state: "MN" }
            const b = { state: "MN" }
            expect(processor.stateComparator(a, b)).to.equal(0)
        })
    })
    describe('stateMapper', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
            processor.cityComparator = sinon.stub().returns(0)
        })
        it('should map a state', () => {
            const state = {
                state: 'MN',
                cities: [42, 43, 44]
            }
            const expected = {
                state: 'MN',
                city: 42
            }
            expect(processor.stateMapper(state)).to.deep.equal(expected)
        })
    })
    describe('cloneState', () => {
        let processor
        beforeEach(() => {
            processor = require('./processor')
        })
        it('should clone the current state', () => {
            let currentState = [
                {
                    state: 'MN', cities: [
                        { name: 'Minneapols', population: '42' },
                        { name: 'St. Paul', population: '41' }
                    ]
                },
                {
                    state: 'IL', cities: [
                        { name: 'Chicago', population: '422' }
                    ]
                }
            ]

            expect(processor.cloneState(currentState)).to.deep.equal(currentState)
        })
    })
    describe('reducer', () => {
        it('should add to the population of an existing city', () => {
            let city = {
                name: 'Chicago', population: 40
            }
            let state = {
                state: 'IL', cities: [city]
            }
            let processor = require('./processor')
            let currentState = [state]

            const trueFilter = () => {
                return true
            }
            processor.cloneState = sinon.stub().returns(currentState)
            processor.stateFilter = sinon.stub().returns(trueFilter)
            processor.cityFilter = sinon.stub().returns(trueFilter)

            let zip = { state: 'IL', city: 'Chicago', pop: 2 }
            const newState = processor.reducer(currentState, zip)

            expect(newState.length).to.equal(1)
            expect(newState[0].state).to.equal('IL')
            expect(newState[0].cities.length).to.equal(1)
            expect(newState[0].cities[0].name).to.equal('Chicago')
            expect(newState[0].cities[0].population).to.equal(42)
        })
    })
})