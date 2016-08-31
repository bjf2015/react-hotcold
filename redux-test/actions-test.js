
// var TestUtils = require('redux-test-utils');
var should = require('chai').should();
import { expect } from 'chai';
var actions = require('../js/actions');

describe('actions', () => {
  it('should create an action to make a guess', () => {
    const userNum = 8
    const expectedAction = {
      type: actions.MAKE_GUESS,
      userNum: userNum
    }
   JSON.stringify(actions.makeGuess(userNum)).should.equal(JSON.stringify(expectedAction));
   // Two JS objects with same properties are not equal, so this mess
   // we can also use _.isEqual(object, other)
   // expect(actions.makeGuess(userNum)).toEqual(expectedAction)

  });
  it('should start new game', () => {
    var object = actions.startNewGame();
    console.log(object);
    expect(object).to.have.property('type');
    expect(object).to.have.property('randNum');
    expect(object.type).to.eql('START_NEWGAME');
    expect(object.randNum).to.be.within(1, 100);
   // Two JS objects with same properties are not equal, so this mess
   // expect(actions.makeGuess(userNum)).toEqual(expectedAction)

  });


});