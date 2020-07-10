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
                <button id='join-us-btn'>
                    <Link to='/join-us' style={{textDecoration: 'none'}}>
                        Join Us
                    </Link>
                </button>
            </div>
            <div className='content-below-navbar'>
                <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
            </div>
        </Fragment>
        );
    }
}

export default Home;