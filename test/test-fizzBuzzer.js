const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
  it('should replace any number divisible by 3, 5, or 15', function (){
    //fizzBuzzer()
    const normalCases = [
      {a: 3, expected:'fizz'},
      {a: 5, expected:'buzz'},
      {a: 15, expected:'fizz-buzz'},
    ];

    normalCases.forEach(function(input){
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });
});
