const chai = require('chai')
const should = chai.should()
const getWords = require('../breakout/getWords');

describe('getWords should show only the words inside an array', () => {
  it("should return ['Chicken'] if the source is ['Chicken', 3.1415926]", () => {
    const input = ['Chicken', 3.1415926];
    // const output = ainput[0];
    const output = getWords(input);

    output.length.should.equal(1)
    output.should.equal(output[0], 'Chicken'); // or could we use input[0] ?
  });


  it('should return an empty array if there is no words in the source array', () => {
    const output = getWord([42, 1337]);

    output.should.deep.equal([]);

    // output.shoud.be.an('array')
    // output.length.should.equal(0)

    //should.eql([])
    // expect([]).to.be.an('array').that.is.empty;
    // Example input : [ 42 , 1337 ]  

  });

  it("should return ['Alpha','Centauri'] if the source is ['Alpha','Centauri']", () => {
    // Example input : ['Alpha','Centauri']
    const output = getWords(['Alpha', 'Centauri']);

    output.should.deep.equal(output, ['Alpha', 'Centauri']);

    output[0].should.equal('Alpha')
    output[1].should.equal('Centauri')
  });

  it('should return null if the input is not an array of words', () => {
    // Example input : "Hello"
    const output = getWords("hello");

    should.equal(output, null);

  });



})