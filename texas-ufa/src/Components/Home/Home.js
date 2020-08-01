import React, {Component, Fragment,} from 'react';
import axios from 'axios';
import ImageFadeIn from 'react-image-fade-in';

import BasePage from '../BasePage';
import './Home.css';

class Home extends Component {
    state = {
        homeWPData: [],
        isLoaded: false,
    }

    componentDidMount() {
        // Retrieve officer JSON data from WordPress DB
        axios.get('https://texasufa.com/wp/wp-json/wp/v2/branding')
            .then(res => this.setState ({
                homeWPData: res?.data,
                isLoaded: true,
            }))
            .catch(err => console.log(err));
    }

    render() {
        if(!this.state.isLoaded) {
            return <div/>;
        }
        const homeImage = this.state.homeWPData.find(e => (
            e.slug === 'home-image'
        ));
        const {
            description,
            image
        } = homeImage.acf;
        
        return (
        <Fragment>
            <div id='homepage-image-container'>
                <div id='homepage-image'>
                    <ImageFadeIn 
                        src={image.sizes['2048x2048']}
                        alt={description}
                    ></ImageFadeIn>
                </div>
            </div>
            <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
        </Fragment>
        );
    }
}

export default Home;