import React, {Component,} from 'react';
import { HashLink } from 'react-router-hash-link';

import 'font-awesome/css/font-awesome.min.css';
import './NavigationBar.css';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    }
  }

  render() {
    return (
      <div className='navbar'>
        <div
          id='js-navbar-toggle'
          className='navbar-toggle'
          onClick={()=>this.setState({collapsed: !this.state.collapsed})}
        >
          <i className='fa fa-bars noselect'></i>
        </div>
        <HashLink to='/'>
          <div className='nav-brand'>
                <img 
                  id='brand-logo-img'
                  src='https://texasufa.com/wp/wp-content/uploads/2020/07/UFA-Transparent-Logo.png'
                  href='#'
                  alt='Texas UFA Brand Logo'
                ></img>
          </div>        
        </HashLink>
        <ul 
          className={`nav-list ${!this.state.collapsed&&'active'}`} 
          id='js-menu'
        >
          <li>
            <HashLink to='/' className='nav-link'>Home</HashLink>
          </li>
          <li>
            <HashLink to='/about' className='nav-link'>About</HashLink>
          </li>
          <li
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <HashLink to='/teams' className='nav-link'>Teams</HashLink> 
          </li>
          <li>
            <HashLink to='/officer-board' className='nav-link'>Board</HashLink>            
          </li>
          <li>
            <HashLink to='/alumni-network' className='nav-link'>Alumni</HashLink>            
          </li>
          <li>
            <HashLink to='/corporate-partners' className='nav-link'>Partners</HashLink>           
          </li>
          <li>
            <HashLink to='/join-us' className='nav-link'>Join Us</HashLink>            
          </li>
          <li>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default NavigationBar;