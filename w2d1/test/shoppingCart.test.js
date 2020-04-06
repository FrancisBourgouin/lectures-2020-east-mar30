// Calculate the subtotal, total, and tax amount of a cart
// {} vs [] => {} : list a properties on a given subject , [] => list of independent items


// input =>  [9.99, 10.99, 99.99, 49.99, 20.99]

// if there is no prices, should return the message 'cart is empty'
// if there is one price, not inside an array => 'yo, give us an array'
// if there is an array, but it's not numbers inside => null

// output => {subtotal:000, total:000, tax:000}

const calculateCart = require('../shoppingCart')
const chai = require('chai')
const should = chai.should()

let message = 'cart is empty' // Don't do that
const taxes = 0.14975


describe("Calculates an array of prices, returning an object or errors", () => {
  it("should return the message 'cart is empty' if there is no parameter", () => {
    const output = calculateCart()

    output.should.be.a('string')
    output.should.equal('cart is empty') // (message)

  })
  it("should return the message cart is empty if it's an empty array", () => {
    const output = calculateCart([])

    output.should.be.a('string')
    output.should.equal('cart is empty')

  })
  it("should return 'yo, give us an array' if the input is not an array", () => {
    const output = calculateCart("I'm not an array")
    message = "I'm not an array"
    output.should.be.a('string')
    output.should.equal('yo, give us an array') // message

  })
  it("should return null if the contents of the array is not only numbers", () => {
    const output = calculateCart([4.99, 12.99, "MWAHAHA"])

    should.equal(output, null)

  })
  it("should return an object like output, if the array is valid", () => {
    const output = calculateCart([42, 3.99, 2.99])

    output.should.be.an('object')
    output.subtotal.should.equal(48.98)
    output.taxes.should.equal(7.33)
    output.total.should.equal(56.31)

  })
})