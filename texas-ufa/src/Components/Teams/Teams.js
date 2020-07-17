import React, {Component} from 'react';
import BasePage from '../BasePage'

import './Teams.css';

class Teams extends Component {

    render() {
        return (
            <BasePage pageWPSlug='teams' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default Teams;