import React, {Component} from 'react';
import BasePage from '../BasePage'

class About extends Component {

    render() {
        return (
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='about' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default About;