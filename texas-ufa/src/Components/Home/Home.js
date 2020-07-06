import React, {Component,} from 'react';
import { Link } from 'react-router-dom';
import BasePage from '../BasePage';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='content-below-navbar'>
                <div id='homepage-image-container'>
                    <img 
                        src='http://texasufa.com/wp/wp-content/uploads/2020/06/Board-1.jpg'
                        id='homepage-image'
                    ></img>
                    <button id='join-us-btn'>
                        <Link to='/join-us' style={{textDecoration: 'none'}}>
                            <h1>Join Us</h1>
                        </Link>
                    </button>
                </div>
                <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
            </div>
        );
    }
}

export default Home;