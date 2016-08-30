var actions = require('./actions');
var reducers = require('./reducers');
var store = require('./store');
var redux = require('redux');
let React = require('react');
let ReactDOM = require('react-dom');
let UserInput = require('../components/user-input');
let Counter = require('../components/counter');
let FeedBack = require('../components/feedback');
let GuessList = require('../components/guess-list');
let NewGame = require('../components/new-game');



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<FeedBack />
         <UserInput />
         <Counter />
         <GuessList />
      </div>
    )
  }


});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));

});


store.dispatch(actions.makeGuess(53));
store.dispatch(actions.makeGuess(23));
store.dispatch(actions.makeGuess(1));

