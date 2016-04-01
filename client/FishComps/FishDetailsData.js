var React = require('react');
var FishLoader = require('./FishLoader');
var FishDetails = require('./FishDetails');

var FishDetailsData = React.createClass({
	getInitialState: function() {
		return {
		  oneFish: null
	  }
	},
	loadOneFishFromServer: function() {
		$.ajax({
		  url: '/api/fish/oneFish/' + this.props.id,
		  method: 'GET',
		}).done( data => this.setState({oneFish: data}));
	},
	componentDidMount: function() {
		this.loadOneFishFromServer();
	},
	render: function() {
		return this.state.oneFish ? <FishDetails oneFish={this.state.oneFish}/> : <FishLoader/>
	}
});

module.exports = FishDetailsData;