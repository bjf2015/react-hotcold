var should = require('chai').should();
import { expect } from 'chai';
var actions = require('../js/actions');
var reducer = require('../js/reducers').gameController;

describe('reducer', () => {
  it('should return the initial state', () => {
  	var initialGameState={
  	  randNum: null,
	  myNum: null,
	  numHotness: '',
	  guessCount: null,
	  guessSet: []
	};
	// console.log(reducer(initialGameState, actions.MAKE_GUESS));
	expect(reducer(undefined, {})).to.eql(initialGameState);
	// expect(JSON.stringify(reducer.gameController(initialGameState))).toEqual(JSON.stringify(initialGameState));
  });
});