import React, {Component} from 'react';
import BasePage from '../BasePage'

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BasePage pageWPSlug='another' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default Home;