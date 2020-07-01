import React, {Component,} from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavigationBar.css';

class NavigationBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <Navbar expand='lg' fixed='top'>
        <div className='navbar'>
          <div className='nav-logo'>
            <Navbar.Brand>
              <Link to='/'>
                <img 
                  src='http://texasufa.com/wp/wp-content/uploads/2020/06/UFA-Transparent-Logo.png'
                  alt='Texas UFA Brand Logo'
                ></img>
              </Link>
            </Navbar.Brand>            
          </div>
          <div className='nav-list'>
            <Nav className='nav'>
              <Link to='/' className='navbar-field'>
                <div className='navbar-field-container'><h1>Home</h1></div>
              </Link>
              <Link to='/about' className='navbar-field'>
                <div className='navbar-field-container'><h1>About</h1></div>
              </Link>
              <Link to='/investment-teams' className='navbar-field'>
                <div className='navbar-field-container'><h1>Teams</h1></div>
              </Link>
              <Link to='/officer-board' className='navbar-field'>
                <div className='navbar-field-container'><h1>Board</h1></div>
              </Link>
              <Link to='/alumni-network' className='navbar-field'>
                <div className='navbar-field-container'><h1>Alumni</h1></div>
              </Link>
              <Link to='/corporate-partners' className='navbar-field'>
                <div className='navbar-field-container'><h1>Partners</h1></div>
              </Link>
              <Link to='/join-us' className='navbar-field'>
                <div className='navbar-field-container'><h1>Join Us</h1></div>
              </Link>
              <Link to='/contact' className='navbar-field'>
                <div className='navbar-field-container'><h1>Contact</h1></div>
              </Link>
            </Nav>        
          </div>
        </div>
      </Navbar>    
    );
  }
}

export default NavigationBar;