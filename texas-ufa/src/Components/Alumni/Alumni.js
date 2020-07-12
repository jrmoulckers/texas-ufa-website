import React, {Component} from 'react';
import BasePage from '../BasePage'

class Alumni extends Component {

    render() {
        return (
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='alumni' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default Alumni;