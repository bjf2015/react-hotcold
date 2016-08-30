var actions = require('./actions');
var reducers = require('./reducers');
var store = require('./store');
var redux = require('redux');
let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let connect = require('react-redux').connect;
let UserInput = require('../components/user-input');
let Counter = require('../components/counter');
let FeedBack = require('../components/feedback');
let GuessList = require('../components/guess-list');
let NewGame = require('../components/new-game');



var App = React.createClass({
  render: function() {
    return (
      <div>
      	<FeedBack numRating={this.props.feedback}/>
         <UserInput />
         <Counter counter={this.props.counter}/>
         <GuessList />
      </div>
    )
  }


});

var mapStateToProps = function(state, props) {
    return {
        feedback: state.numHotness,
        counter: state.guessCount
    };
};

var Container = connect(mapStateToProps)(App);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	<Provider store={store}>
  	<Container />
  	</Provider>,
  	 document.getElementById('app'));

});


store.dispatch(actions.makeGuess(53));
store.dispatch(actions.makeGuess(23));
store.dispatch(actions.makeGuess(1));



