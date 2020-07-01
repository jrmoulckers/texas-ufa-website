import React, {Component,} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

class Home extends Component {
    state = {
        home: {
            jsonContent: {},
            title: '',
        },
        isLoaded: false, 
    }

    componentDidMount() {
        // Retrieve home page JSON data from WordPress DB via unique slug=home
        axios.get('http://texasufa.com/wp/wp-json/wp/v2/pages/')
            .then(res => {
                // Pull out the homepage JSON data
                const homeData = res.data.find(element => (
                    element.slug === "another"
                ))
                // Set state to include JSON data and page title
                this.setState ({
                    home: {
                        jsonContent: JSON.parse(homeData.post_content_json),
                        title: homeData.title.rendered,
                    },
                    isLoaded: true,
                })
            })
            .catch(err => console.log(err));  
    }

    /**
     * Currently allow the following elements:
     *      Headers
     *      Paragraphs
     *      Ordered/Unordered Lists???
     *      Preformatted Text (Code Blocks)
     *      Images
     *      Videos
     *      File Download
     *      
     * Will Enable:
     *      Galleries
     *      Media with content
     *      Buttons
     *      Bold (Strongs)
     *      Italics       
     *      Strikethroughs        
     *      Hyperlinks        
     *      Underlines?        
     * 
     * Disallow:
     *      Any Widgets
     *      
     */
    turnElementToHTMLContent(e) {
        var content = '';
        switch(e.tag) {
            case 'p':
                content = `<${e.tag}>${e.child[0].text}</${e.tag}>`;
                break;
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4': 
            case 'h5':
            case 'div':
            case 'blockquote':
            case 'figure':
            case 'pre':
            case 'ul':
            case 'ol':
            default:
                content = `<p>${e.tag}: Not yet implemented :(</p>`;
        }
        // Use react-html-parser api to turn string into JSX 
        return content;
    }

    /**
     * Renders HTML chunk from json provided by WordPress
     */
    renderPageContentFromJSON(jsonContent) {
        var stringHTMLContent = '';
        // Concatenate string-format content HTML into single string
        stringHTMLContent = jsonContent.child?.[0].child?.map(
            e => this.turnElementToHTMLContent(e)
        )
        .join('');
        return stringHTMLContent;
    }

    render() {
        const {home,} = this.state;
        const content = this.renderPageContentFromJSON(home.jsonContent);
        return (
            <div>
                <h1 id='home-title'>{home.title}</h1>
                {ReactHtmlParser(content)}
            </div>
        );
    }
}

export default Home;