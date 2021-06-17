const assert = require('assert');
const helloWorld = require('../helloWorld.js');

describe("We are testing here the function helloWord: ",function(){
  //act
  let greeting = 'Hello World';
  //arrange
  let result = helloWorld();
  //assert
  it("Here I am first testing if helloWord is returning the sentence helloWord",function(){
    expect(result).toEqual(greeting);
  })

  it("Here I am first testing if helloWord is returning the sentence helloWord",function(){
    expect("Hello World").toEqual(helloWorld());
  })
})
