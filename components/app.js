let React = require('react');
let ReactDOM = require('react-dom');
let UserInput = require('../components/user-input');

var App = React.createClass({
  render: function() {
    return (
      <div>
          "Hi!"
          <UserInput />
      </div>
    )
  }


});

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<App />, document.getElementById('app'));

});
