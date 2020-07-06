import React, {Component, Fragment} from 'react';
import OfficerTeam from './OfficerTeam';
import BasePage from '../BasePage'

class OfficerBoard extends Component {
  render() {
    return (
      <div className='content-below-navbar'>
        <OfficerTeam/>
        <BasePage pageWPSlug='example' pageData={this.props.pageData}></BasePage>
      </div>
    );
  }
}

export default OfficerBoard;