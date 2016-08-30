var React = require('react');
var ReactDOM = require('react-dom');

var GuessList = function(props) {

	return (
		<div className="number-list">Guess List: {props.guess}</div>
		);
}

module.exports = GuessList;