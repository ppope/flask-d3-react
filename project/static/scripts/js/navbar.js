var Navbar = ReactBootstrap.Navbar;
var NavItem = ReactBootstrap.NavItem;
var Nav = ReactBootstrap.Nav;

const navbarInstance = (
    React.createElement(Navbar, {brand: "Flask/D3/React", inverse: true, toggleNavKey: 0}, 
    React.createElement(Nav, {right: true, eventKey: 0}
    )
    )
);

React.render(navbarInstance, document.getElementById('navbarid'));
