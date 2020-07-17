import React, {Component} from 'react';
import BasePage from '../BasePage'

import './JoinUs.css';

class JoinUs extends Component {

    render() {
        return (
            <BasePage pageWPSlug='join-us' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default JoinUs;