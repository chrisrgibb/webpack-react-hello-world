var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
	render : function() {
		return (
			<h1>{this.props.message}</h1>
		);
	}
});

ReactDOM.render(
  <Hello message="Hello, world!"/>,
  document.getElementById('main')
);