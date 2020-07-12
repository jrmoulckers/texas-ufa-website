import React, {Component} from 'react';
import axios from 'axios';
import BasePage from '../BasePage'

class CorporatePartners extends Component {
    state = {
        corporatePartners: {
            title: '',
            content: '',
        },
        isLoaded: false, 
    }

    componentDidMount() {
        // Retrieve home page JSON data from WordPress DB via unique slug=home
        axios.get('https://texasufa.com/wp/wp-json/wp/v2/pages')
            .then(res => {
                // Pull out the homepage JSON data
                const cpData = res.data.find(element => (
                    element.slug === "home"
                ))
                this.setState ({
                    corporatePartners: {

                        title: cpData.title.rendered,
                        content: cpData.content.rendered,
                    },
                    isLoaded: true,
                })
            })
            .catch(err => console.log(err));  
        
    }

    render() {
        const {corporatePartners,} = this.state;
        return (
            <BasePage pageWPSlug='corporate-partners' pageData={this.props.pageData}></BasePage>
        );
    }
}

export default CorporatePartners;