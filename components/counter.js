var React = require('react');
var ReactDOM = require('react-dom');


var Counter = function(props) {

	return (

		<div className="increment">Guesses: {props.counter}</div>
		);


}


module.exports = Counter;