// Use the Chai assert or expect methods to complete the following test :
// Expect : https://www.chaijs.com/api/bdd/
// Assert : https://www.chaijs.com/api/assert/

// Consider that you have access to the getWords function

it('should return an empty array if there is no words in the source array', () => {
  const output = getWord([42, 1337]);

  output.should.deep.equal([]);

  // output.shoud.be.an('array')
  // output.length.should.equal(0)

  //should.eql([])
  // expect([]).to.be.an('array').that.is.empty;
  // Example input : [ 42 , 1337 ]  

});