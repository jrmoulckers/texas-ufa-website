import React, {Component, Fragment,} from 'react';
import BasePage from '../BasePage';
import './Home.css';

class Home extends Component {

    render() {
        return (
        <Fragment>
            <div id='homepage-image-container'>
                <img 
                    src='https://texasufa.com/wp/wp-content/uploads/2020/07/Board.jpg'
                    id='homepage-image'
                ></img>
            </div>
            <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
        </Fragment>
        );
    }
}

export default Home;