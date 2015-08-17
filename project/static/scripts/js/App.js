var _ = require("/static/bower_components/lodash/dist/lodash.min.js");
//var DropdownButton = ReactBootstrap.DropdownButton;
//var MenuItem = ReactBootstrap.MenuItem;


var App = React.createClass({displayName: 'App',
  getInitialState: function() {
    return {
      path: '/static/data/graph-1.json'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "App"}, 
        React.createElement(DataButton, {
          appState: this.state, 
          setAppState: this.setAppState}
        ), 
        React.createElement(Chart, {
          appState: this.state, 
          setAppState: this.setAppState}
        )
      )
    );
  },

  setAppState: function(partialState, callback) {
    return this.setState(partialState, callback);
  }
});

module.exports = App;
