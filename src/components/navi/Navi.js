import React from 'react';
import {
    Collapse, Nav, Navbar, NavbarBrand, NavbarToggler
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

class Navi extends React.Component {
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
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">react-redux</NavbarBrand>
                    <NavbarToggler onClick={this.state.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <CartSummary></CartSummary>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navi;