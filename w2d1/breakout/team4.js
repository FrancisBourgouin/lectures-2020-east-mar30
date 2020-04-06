// Use the Chai assert or expect methods to complete the following test :
// Expect : https://www.chaijs.com/api/bdd/
// Assert : https://www.chaijs.com/api/assert/

// Consider that you have access to the getWords function

const calculateCart = require('../shoppingCart')
const chai = require('chai')
const should = chai.should()

it("should return ['Alpha','Centauri'] if the source is ['Alpha','Centauri']", () => {
  // Example input : ['Alpha','Centauri']
  const output = getWords(['Alpha', 'Centauri']);

  output.should.deep.equal(output, ['Alpha', 'Centauri']);

  output[0].should.equal('Alpha')
  output[1].should.equal('Centauri')
});