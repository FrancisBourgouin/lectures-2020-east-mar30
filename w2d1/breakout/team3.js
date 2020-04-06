// Use the Chai assert or expect methods to complete the following test :
// Expect : https://www.chaijs.com/api/bdd/
// Assert : https://www.chaijs.com/api/assert/

// Consider that you have access to the getWords function


const should = chai.should();
const getWords = require('./getWords');

it("should return ['Chicken'] if the source is ['Chicken', 3.1415926]", () => {
  const input = ['Chicken', 3.1415926];
  // const output = ainput[0];
  const output = getWords(input);

  output.length.should.equal(1)
  output.should.equal(output[0], 'Chicken'); // or could we use input[0] ?
});