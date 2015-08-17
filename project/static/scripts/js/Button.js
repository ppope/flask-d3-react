var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

function renderDropdownButton (title, i) {
  return (
    React.createElement(DropdownButton, {bsStyle: title.toLowerCase(), title: title, key: i}, 
      React.createElement(MenuItem, {eventKey: "1"}, "Action"), 
      React.createElement(MenuItem, {eventKey: "2"}, "Another action"), 
      React.createElement(MenuItem, {eventKey: "3", active: true}, "Active Item"), 
      React.createElement(MenuItem, {divider: true}), 
      React.createElement(MenuItem, {eventKey: "4"}, "Separated link")
    )
  );
}

const buttonsInstance = (
  React.createElement(ButtonToolbar, null, BUTTONS.map(renderDropdownButton))
);

React.render(buttonsInstance, document.getElementById('Buttons'));

