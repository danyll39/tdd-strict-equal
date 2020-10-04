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
    it('return true if values are strict equals', () => {
      const equality = strictEqual('string', 'string')

      expect(equality).to.equal(true)
    })

    it('return false if values are not strict equals', () => {
      const equality = strictEqual(5, '5')

      expect(equality).to.equal(false)
    })
    it('return false if values are not strict equals', () => {
      const equality = strictEqual(5, 8)

      expect(equality).to.equal(false)
    })
    it('return false if values are not strict equals', () => {
      const equality = strictEqual(5, true)

      expect(equality).to.equal(false)
    })

    it('return false if values are not strict equals', () => {
      const equality = strictEqual(5, 'string')

      expect(equality).to.equal(false)
    })
  })
})
