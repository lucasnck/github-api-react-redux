import React from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGit } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faUser } from '@fortawesome/free-regular-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <div className="container">
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Lucas Ribeiro</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://www.linkedin.com/in/lucasnck/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/lucasnck" target="_blank"><FontAwesomeIcon icon={faGithub}/> Github</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://lucasnck.github.io/" target="_blank"><FontAwesomeIcon icon={faUserCircle}/> Portfolio</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header >
        )
    }
}

export default Header