var React = require('react');
var FishForm = require('./FishForm');

var FishFormData = React.createClass({
	getInititalState: function() {
		return {
			fishName: null,
			peopleEater: null,
      color: null,
      img: null,
      length: null,
		}
	},
	onNameChange: function(event){
    this.setState({ fishName: event.target.value })
  },
  onColorChange: function(event){
    this.setState({ color: event.target.value })
  },
  onImgChange: function(event){
    this.setState({ img: event.target.value })
  },
  onLengthChange: function(event){
    this.setState({ length: event.target.value })
  },
  peopleEaterChange: function(event){
    console.log(event.target.value);
    this.setState({ peopleEater: event.target.value })
  },
  submitFishToServer: function(fishData) {
    console.log("da fishes data in da o\'fish app", fishData);
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'POST',
      data: fishData
    }).done(function(data){
      console.log("inner inside POST fishy success", data);
      self.loadAllFishFromServer();
    })
  },
  render: function() {
  	return (
  	  <FishForm
  		  onNameChange={this.onNameChange}
  		  onColorChange={this.onColorChange}
  		  onImgChange={this.onImgChange}
  		  onLengthChange={this.onLengthChange}
  		  peopleEaterChange={this.onPeopleEaterChange} />
  	)
  },
});


module.exports = FishFormData;