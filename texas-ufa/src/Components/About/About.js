import React, {Component} from 'react';
import BasePage from '../BasePage'

class About extends Component {

    render() {
        return (
            <BasePage pageWPSlug='about' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default About;