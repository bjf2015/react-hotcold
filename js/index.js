var actions = require('./actions');
var reducers = require('./reducers');
var store = require('./store');
var redux = require('redux');
let React = require('react');
let ReactDOM = require('react-dom');
let UserInput = require('../components/user-input');

var App = React.createClass({
  render: function() {
    return (
      <div>
          "Hi!"
          
      </div>
    )
  }


});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App/>, document.getElementById('app'));

});


store.dispatch(actions.makeGuess(53));
store.dispatch(actions.makeGuess(23));
store.dispatch(actions.makeGuess(1));
console.log('getState is ',store.getState());
