var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./navbar');
var Footer = require('./footer');
var Welcome = require('./welcome');
var Cookies = require('./cookies');
var Bears = require('./bears');
var FishApp = require('./fishapp');
var Beer = require('./beer');
var Notifier = require('./Notifier');

require('./stylesheets/main.scss')


var App = React.createClass({
  getInitialState: function() {
  	return {
  	  activeComponent: 'welcome'
  	}
  },
  setActiveComponent: function(componentName) {
  	console.log("found component name: ", componentName);
    this.setState({
      activeComponent: componentName
    })
  },
  showWhichComponent: function() {
    switch (this.state.activeComponent) {
      case 'welcome':
        return <Welcome/>
        break;
      case 'cookies':
        return <Cookies/>
        break;
      case 'bears':
        return <Bears/>
        break;
      case 'fish':
        return <FishApp/>
        break;
      case 'beer':
        return <Beer/>
        break;
      default:
        return <Welcome/>
    };
  },

  render: function() {
    return (
      <div>
        <Notifier > 
          <NavBar setActiveComponent={ this.setActiveComponent }/>
          <div>
  		    { this.showWhichComponent() }
          </div>
          <Footer/> 
        </Notifier>  
      </div>      
    )
  },
});

ReactDOM.render(
  <App />, document.getElementById('app')
);
