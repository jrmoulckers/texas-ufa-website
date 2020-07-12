import React, {Component, Fragment,} from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <Fragment>
            <div id='homepage-image-container'>
                <img 
                    src='http://texasufa.com/wp/wp-content/uploads/2020/06/Board-1.jpg'
                    id='homepage-image'
                ></img>
            </div>
            <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
        </Fragment>
        );
    }
}

export default Home;