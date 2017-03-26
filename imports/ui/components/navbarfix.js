import React, {Component} from 'react';
import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';

class Navbarfix extends Component {

  render() {

      return (
        <div>
        <Navbar className="navbar navbar-default">
            <Navbar.Header>
              <Navbar.Brand>The Bible</Navbar.Brand>
          </Navbar.Header>

        </Navbar>
        </div>
        )
  }

}
export default Navbarfix;
