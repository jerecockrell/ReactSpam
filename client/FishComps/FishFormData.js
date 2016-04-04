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
  contextTypes: {
    sendNotification: React.PropTypes.func.isRequired
  },
	onNameChange: function(event){
    console.log(event.target.value);
    this.setState({ fishName: event.target.value })
  },
  onColorChange: function(event){
    console.log(event.target.value);
    this.setState({ color: event.target.value })
  },
  onImgChange: function(event){
    console.log(event.target.value);
    this.setState({ img: event.target.value })
  },
  onLengthChange: function(event){
    console.log(event.target.value);
    this.setState({ length: event.target.value })
  },
  peopleEaterChange: function(event){
    console.log(event.target.value);
    this.setState({ peopleEater: event.target.value })
  },
  submitFishToServer: function(e) {
    e.preventDefault();
    var fishData = {
            name: this.state.fishName.trim(),
            color: this.state.color.trim(),
            length: this.state.length.trim(),
            img: this.state.img.trim(),
            people_eater: this.state.peopleEater
        };
    var self = this;
    $.ajax({
      url: '/api/fish',
      method: 'POST',
      data: fishData
    }).done(function(data){
      console.log("inner inside POST fishy success", data);
      self.props.toggleActiveComp('fish');
      self.context.sendNotification("Add Fish");
    })
    this.setState({name:'',color:'',length:'',img:''})
  },
  render: function() {
  	return (
  	  <FishForm
        submitFishToServer={this.submitFishToServer}
  		  onNameChange={this.onNameChange}
  		  onColorChange={this.onColorChange}
  		  onImgChange={this.onImgChange}
  		  onLengthChange={this.onLengthChange}
  		  peopleEaterChange={this.peopleEaterChange} />
  	)
  },
});


module.exports = FishFormData;