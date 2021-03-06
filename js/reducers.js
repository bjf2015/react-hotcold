var actions = require('./actions');
var update = require('react-addons-update');

var initialGameState = {
  randNum: null,
  myNum: null,
  numHotness: '',
  guessCount: null,
  guessSet: []
};

var gameController = function(state, action) {
    state = state || initialGameState;
    console.log(state.randNum);
    if (action.type === actions.MAKE_GUESS){
      var numRating;
      var diffNum = Math.abs(state.randNum - action.userNum);
      if (diffNum >= 50){
        numRating = 'Ice cold'
      }
      else if (diffNum < 50 && diffNum >= 30){
        numRating = 'Cold'
      }
      else if (diffNum < 30 && diffNum >= 20){
        numRating = 'Warm'
      }
      else if (diffNum < 20 && diffNum >= 10){
        numRating = 'Hot'
      }
      else if (diffNum < 10 && diffNum >= 1){
        numRating = 'Very hot!'
      }
      else {
        numRating = 'You win!'
      }
      console.log('original ran', state.randNum);
      // console.log('userNum is', action.userNum);
      // console.log('numRating is', numRating);

      var initSet = state.guessSet.slice();
      // console.log('initSet is', initSet);
      var afterSet = initSet.concat([action.userNum]);
     console.log(afterSet.join(','));

      // console.log('afterSet is', afterSet);

      var guessCounter = state.guessCount + 1;

      var newState = update(state, {
        myNum: {$set: action.userNum},
        numHotness: {$set: numRating},
        guessSet: {$set: afterSet},
        guessCount: {$set: guessCounter}
      });

      return newState;
    };

    if (action.type === actions.START_NEWGAME){
      
      return update(initialGameState, {
        randNum: {$set: action.randNum}
        
      });
      
    };

    return state;
};

exports.gameController = gameController;
