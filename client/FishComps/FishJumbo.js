var React = require('react');

var FishJumbotron = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">
			  <h1 className="display-3">Do you know about fish?</h1>
			  <p className="lead">Cookies have become the new meth</p>
			  <hr className="m-y-2" />
			</div>
		)
	}
});

module.exports = FishJumbotron;