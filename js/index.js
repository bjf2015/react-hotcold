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
      	<FeedBack numHotness={this.props.feedback}/>
         <UserInput />
         <Counter counter={this.props.counter}/>
         <GuessList guess={this.props.guessSet}/>
         <NewGame />
      </div>
    )
  }


});


//The mapStateToProps function describes how the different parts of the state should be inserted into the props of the component. 
//Each key in the returned object is a single prop which will be added to the wrapped component. The value is the value which will be given to that prop.
var mapStateToProps = function(state, props) {
    return {
        feedback: state.numHotness,
        counter: state.guessCount,
        randNum: state.randNum,
        guessSet: state.guessSet
    };
};

//connects the values from mapStateToProps to App component
var Container = connect(mapStateToProps)(App);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
  	//When the Provider is in place, components can access parts of the store, including the dispatch method, using the connect method.
  	//The Provider passes the Redux store down to any components which request access to part of it. 
  	<Provider store={store}>
  	<Container />
  	</Provider>,
  	 document.getElementById('app'));

});


// store.dispatch(actions.makeGuess(53));
// store.dispatch(actions.makeGuess(23));
// store.dispatch(actions.makeGuess(1));



