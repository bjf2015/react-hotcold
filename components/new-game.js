var React = require('react');
var ReactDOM = require('react-dom');
var actions = require('../js/actions');
var connect = require('react-redux').connect;

var NewGame = React.createClass({

	onSubmit: function(event) {
		event.preventDefault();
		console.log("New Game Clicked!");
		this.props.dispatch(actions.startNewGame());

	},


	render: function() {
	return (
		<div className="reset-game">
			<form onSubmit={this.onSubmit} >
				<button type='submit'>New Game!</button>
			</form>
		</div>

		);
	}
});

//the connect method also inserts the dispatch function by default without mapStateProps()
var Container = connect()(NewGame);

module.exports = Container;