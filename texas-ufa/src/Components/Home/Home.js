import React, {Component, Fragment,} from 'react';
import BasePage from '../BasePage';
import './Home.css';

class Home extends Component {
    constructor() {
        super()
        this.state = {
          homeImage: undefined,
        }
    }

    componentDidMount() {
        this.loadHomeImage();
    }

    loadHomeImage() {
        this.setState({
            homeImage: (
                <img 
                    src='https://texasufa.com/wp/wp-content/uploads/2020/07/Board.jpg'
                    id='homepage-image'
                ></img>
            ),
        })
    }

    render() {
        if(!this.state.homeImage) {
            return <div></div>;
        };
        return (
            <Fragment>
                <div id='homepage-image-container'>
                    {this.state.homeImage}
                </div>
                <BasePage pageWPSlug='home' pageData={this.props.pageData}></BasePage>
            </Fragment>
        );
    }
}

export default Home;