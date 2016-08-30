let React = require('react');
let ReactDOM = require('react-dom');
let Provider = require('react-redux').Provider;
let connect = require('react-redux').connect;

var UserInput = React.createClass({

	getInitialState: function() {
		return {

		}

	},

	onSubmit: function(event) {
		event.preventDefault();
		console.log("this button works!");


	},

  render: function() {
    return (
    <div className="input">
      <form onSubmit={this.onSubmit}>
        <input type="text" />
        <button>Guess!</button>
      </form>
    </div>  
  );

  }


})


module.exports = UserInput;