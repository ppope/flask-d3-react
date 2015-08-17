var _ = require("/static/bower_components/lodash/dist/lodash.min.js");
//var DropdownButton = ReactBootstrap.DropdownButton;
//var MenuItem = ReactBootstrap.MenuItem;


var App = React.createClass({
  getInitialState: function() {
    return {
      path: '/static/data/graph-1.json'
    };
  },

  render: function() {
    return (
      <div className="App">
        <DataButton
          appState={this.state}
          setAppState={this.setAppState}
        />
        <Chart
          appState={this.state}
          setAppState={this.setAppState} 
        />
      </div>
    );
  },

  setAppState: function(partialState, callback) {
    return this.setState(partialState, callback);
  }
});

module.exports = App;
