/** @jsx React.DOM */
var _ = require("/static/bower_components/lodash/dist/lodash.min.js");
var d3Chart = require('/static/scripts/js/d3Chart.js');

var Chart = React.createClass({
  getDefaultProps: function() {
    return {
      width: 1000,
      height: 1000
    };
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    d3Chart.create(el, {
      width: this.props.width,
      height: this.props.height
    }, this.getChartState());
  },

  componentDidUpdate: function(prevProps, prevState) {
    var el = this.getDOMNode();
    d3Chart.update(el, this.props, this.getChartState());
  },
  
  getChartState: function() {
    var appState = this.props.appState;
    return _.assign({}, appState);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
 });

module.exports = Chart;
