/** @jsx React.DOM */

var Pagination = React.createClass({displayName: 'Pagination',
  render: function() {
    return (
      React.createElement("p", null, 
        React.createElement("a", {href: "#", onClick: this.handlePrevious}, "Previous"), 
        React.createElement("span", null, " - "), 
        React.createElement("a", {href: "#", onClick: this.handleNext}, "Next")
      )
    );
  },
  
  handlePrevious: function(e) {
    e.preventDefault();
    this.changeGraph();
  },

  handleNext: function(e) {
    e.preventDefault();
    this.changeGraph();
  },

  changeGraph: function() {
    prevPath = this.props.appState.path;
    var newpath;
    if (prevPath == '/static/data/graph.json'){
      newPath = '/static/data/graph-2.json'; 
    } 
    if (prevPath == '/static/data/graph-2.json'){
      newPath = '/static/data/graph.json';
    }
    
    this.props.setAppState({
      path: newPath
    });
  
  }
});

module.exports = Pagination;
