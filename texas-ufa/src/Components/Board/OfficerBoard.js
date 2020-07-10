import React, {Component, Fragment} from 'react';
import OfficerTeam from './OfficerTeam';
import BasePage from '../BasePage'
import './OfficerBoard.css'

class OfficerBoard extends Component {
  render() {
    return (
      <div className='content-below-navbar'>
        <BasePage pageWPSlug='board' pageData={this.props.pageData}></BasePage>
        <OfficerTeam/>
     </div>
    );
  }
}

export default OfficerBoard;