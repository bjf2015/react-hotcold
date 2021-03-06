let React = require('react');
let ReactDOM = require('react-dom');
let actions = require('../js/actions');
let Provider = require('react-redux').Provider;
let connect = require('react-redux').connect;

var UserInput = React.createClass({

	onSubmit: function(event) {
		event.preventDefault();
		console.log("this button works!");
		console.log(this.refs.input.value);
		var myGuess = parseInt(this.refs.input.value);
    if (myGuess < 1 || myGuess > 100|| isNaN(myGuess) || myGuess === undefined) {
          alert('Please enter an integer between 1 and 100');
          return;
        }
		this.props.dispatch(actions.makeGuess(myGuess));
		this.refs.input.value = '';

	},

  render: function() {
  	
    return (
    <div className="input">
      <form onSubmit={this.onSubmit} >
        <input type="text" placeholder="Enter your guess!" ref="input"/>
        <button type="submit">Guess!</button>
      </form>
    </div>  
  );

  }






});


//the connect method also inserts the dispatch function by default without mapStateProps()
var Container = connect()(UserInput);

//exporting container component
module.exports = Container;