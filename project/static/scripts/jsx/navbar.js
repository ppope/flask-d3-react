var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

const navbarInstance = (
    <Navbar brand="Flask/D3/React" inverse toggleNavKey={0}>
    <Nav right eventKey={0}>
    </Nav>
    </Navbar>
);

React.render(navbarInstance, document.getElementById('navbarid'));
