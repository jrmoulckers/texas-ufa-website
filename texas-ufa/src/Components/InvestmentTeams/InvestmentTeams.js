import React, {Component} from 'react';
import BasePage from '../BasePage'

class InvestmentTeams extends Component {

    render() {
        return (
            <BasePage pageWPSlug='investment-teams' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default InvestmentTeams;