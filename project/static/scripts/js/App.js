var _ = require("/static/bower_components/lodash/dist/lodash.min.js");

var App = React.createClass({displayName: 'App',
  getInitialState: function() {
    return {
      path: '/static/data/graph.json'
    };
  },

  render: function() {
    return (
      React.createElement("div", {className: "App"}, 
       React.createElement(Pagination, {
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
