var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

const BUTTONS = ['Data']

function renderDropdownButton (title, i) {
  return (
    <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i}>
      <MenuItem eventKey='1'>Action</MenuItem>
      <MenuItem eventKey='2'>Another action</MenuItem>
    </DropdownButton>
  );
}

const buttonsInstance = (
  <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
);

module.exports = buttonsInstance;


