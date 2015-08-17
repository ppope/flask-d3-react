/** @jsx React.DOM */

var Pagination = React.createClass({
  render: function() {
    return (
      <p>
        <a href="#" onClick={this.handlePrevious}>Previous</a>
        <span> - </span>
        <a href="#" onClick={this.handleNext}>Next</a>
      </p>
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
