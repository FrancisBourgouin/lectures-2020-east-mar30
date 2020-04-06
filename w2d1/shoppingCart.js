// Calculate the subtotal, total, and tax amount of a cart
// {} vs [] => {} : list a properties on a given subject , [] => list of independent items


// input =>  [9.99, 10.99, 99.99, 49.99, 20.99]

// if there is no prices, should return the message 'cart is empty'
// if there is one price, not inside an array => 'yo, give us an array'
// if there is an array, but it's not numbers inside => null

// output => {subtotal:000, total:000, tax:000}


const calculateCart = (cart) => {
  const taxes = 0.14975
  let subtotal = 0

  if (cart === undefined || !cart.length) {
    return 'cart is empty'
  }
  if (!Array.isArray(cart)) {
    return 'yo, give us an array'
  }
  for (const cartItem of cart) {
    if (!Number.parseFloat(cartItem)) {
      return null
    }
  }

  for (const cartItem of cart) {
    subtotal += cartItem
  }
  const cleanedSubTotal = Math.floor(subtotal * 100) / 100

  const total = subtotal * taxes + subtotal
  const cleanedTotal = Math.floor(total * 100) / 100

  const taxAmount = subtotal * taxes
  const cleanedTaxAmount = Math.floor(taxAmount * 100) / 100

  return { total: cleanedTotal, subtotal: cleanedSubTotal, taxes: cleanedTaxAmount }
  // same as return {total:total, subtotal:subtotal, taxes:taxes}

}

module.exports = calculateCart