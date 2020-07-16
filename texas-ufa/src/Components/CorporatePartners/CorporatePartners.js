import React, {Component} from 'react';
import BasePage from '../BasePage'
import './CorporatePartners.css';

class CorporatePartners extends Component {

    render() {
        return (
            <BasePage pageWPSlug='corporate-partners' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default CorporatePartners;