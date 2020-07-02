import React, {Component, Fragment} from 'react';
import OfficerTeam from './OfficerTeam';
import BasePage from '../BasePage'

class OfficerBoard extends Component {
  render() {
    return (
      <Fragment>
        <OfficerTeam/>
        <BasePage pageWPSlug='example' pageData={this.props.pageData}></BasePage>
      </Fragment>
    );
  }
}

export default OfficerBoard;