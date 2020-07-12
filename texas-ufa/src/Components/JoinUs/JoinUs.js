import React, {Component} from 'react';
import BasePage from '../BasePage'

class JoinUs extends Component {

    render() {
        return (
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='join-us' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default JoinUs;