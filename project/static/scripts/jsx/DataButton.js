var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var DataButton = React.createClass({
    render: function () {
        return (
            <DropdownButton title='Data'>
            <MenuItem eventKey='1' onClick={this.changeGraph1}>graph-1.json</MenuItem>
            <MenuItem eventKey='2' onClick={this.changeGraph2}>graph-2.json</MenuItem>
            </DropdownButton>
        );
    },
    
    changeGraph1: function() {
        //prevPath = this.props.appState.path;
        newPath = '/static/data/graph-1.json';
        this.props.setAppState({
            path: newPath
        });
    },

    changeGraph2: function() {
        newPath = '/static/data/graph-2.json';
        this.props.setAppState({
            path: newPath
        });
    }


});

module.exports = DataButton;
