var React = require('react');

var EditFishData = React.createClass({
	render: function() {
		return (
			<div>
			  <h3> You has found EditFishData-chan </h3>
			  <p> Id is: {this.props.id} </p>
			</div>
			)
	}
})

module.exports = EditFishData;