import React, {Component,} from 'react';
import { Link } from 'react-router-dom';
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
        <Link to='/'>
          <div className='nav-brand'>
                <img 
                  id='brand-logo-img'
                  src='https://texasufa.com/wp/wp-content/uploads/2020/07/UFA-Transparent-Logo.png'
                  href='#'
                  alt='Texas UFA Brand Logo'
                ></img>
          </div>        
        </Link>

        <ul 
          className={`nav-list ${!this.state.collapsed&&'active'}`} 
          id='js-menu'
        >
          <li>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to='/about' className='nav-link'>About</Link>
          </li>
          <li>
            <Link to='/teams' className='nav-link'>Teams</Link>            
          </li>
          <li>
            <Link to='/officer-board' className='nav-link'>Board</Link>            
          </li>
          <li>
            <Link to='/alumni-network' className='nav-link'>Alumni</Link>            
          </li>
          <li>
            <Link to='/corporate-partners' className='nav-link'>Partners</Link>           
          </li>
          <li>
            <Link to='/join-us' className='nav-link'>Join Us</Link>            
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