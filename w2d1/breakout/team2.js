// Use the Chai assert or expect methods to complete the following test :
// Expect : https://www.chaijs.com/api/bdd/
// Assert : https://www.chaijs.com/api/assert/

// Consider that you have access to the getWords function

it('should return null if the input is not an array of words', () => {
  // Example input : "Hello"
  const output = getWords("hello");

  should.equal(output, null);

});