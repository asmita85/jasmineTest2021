const assert = require('assert');
const addition = require('../addition.js');

describe("Testing our addition function : ",function(){

  it("Test1 throws error if x and y are NOT passed into the function", function() {
    assert.throws(function() {
      addition();
    },
    {
        message: 'Error at least one number is required'
    }
    );
  });

  it("Test2 We must add 2 if only one number is passed to the function",function(){
    expect(addition(5)).toEqual(7);
  })

  it("Test3 addition function should  return the sum of x , y",function(){
    expect(addition(5,5)).toEqual(10);
  })

})
