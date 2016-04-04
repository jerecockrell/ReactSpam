var React = require('react');
var Loader = require('./FishLoader');
var FishList = require('./FishList');

var FishListData = React.createClass({

	getInitialState() {
		return {
			allFish: null
		}
	},
	contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },
  deleteFish(id) {
  	var self = this;
  	if(confirm('Really is?')){
      $.ajax({
    	  url: '/api/fish/onefish/' + id,
    	  method: 'DELETE'
      }).done(function(){
    	  self.context.sendNotification('fish so deleted');
        self.loadAllFishFromServer();
      });
    }
  },
	loadAllFishFromServer() {
		$.ajax({
			url: '/api/fish',
			method: 'GET'
		}).done((data) => this.setState({ allFish: data }) );
	},

	componentDidMount() {
		this.loadAllFishFromServer();
	},

	render() {
		return this.state.allFish ? <FishList fishArray={this.state.allFish} getId={this.props.getId} deleteFish={this.deleteFish} /> : <Loader/>;
	},
});

module.exports = FishListData;