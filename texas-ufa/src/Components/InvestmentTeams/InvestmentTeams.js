import React, {Component} from 'react';
import BasePage from '../BasePage'

class InvestmentTeams extends Component {

    render() {
        return (
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='investment-teams' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default InvestmentTeams;