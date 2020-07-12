import React, {Component} from 'react';
import BasePage from '../BasePage'

class Alumni extends Component {

    render() {
        return (
            <BasePage pageWPSlug='alumni' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default Alumni;