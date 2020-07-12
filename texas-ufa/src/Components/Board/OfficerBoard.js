import React, {Component, Fragment} from 'react';
import OfficerTeam from './OfficerTeam';
import BasePage from '../BasePage'
import './OfficerBoard.css'

class OfficerBoard extends Component {
  render() {
    return (
      <Fragment>
        <BasePage pageWPSlug='board' pageData={this.props.pageData}></BasePage>
        <OfficerTeam/>        
      </Fragment>
    );
  }
}

export default OfficerBoard;