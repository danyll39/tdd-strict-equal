let describe = require('mocha').describe
let it = require('mocha').it
let expect = require('chai').expect
let strictEqual = require('../calculation')


describe('calculation', () => {
  describe('strictEqual', () => {
    it('return true if values are strict equals', () => {
      const equality = strictEqual(5, 5)

      expect(equality).to.equal(true)
    })
  })
})
