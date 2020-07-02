import React, {Component,} from 'react';
import ReactHtmlParser from 'react-html-parser';

class BasePage extends Component {
    constructor(props) {
        super(props);
    }

    getThisPageJSONX(pageData, wpSlug) {
        // Pull out the page JSON data for this page's WordPress slug
        const pageJSON = pageData.find(element => (
            element.slug === wpSlug
        ))
        // Safely handle null return
        return pageJSON? pageJSON : {post_content_json:"{}"};
    }

    getThisPageContentArrayX(pageJSON) {
        const contentJSON = JSON.parse(pageJSON.post_content_json)?.child?.[0].child;
        //Safely handle null return
        return contentJSON? contentJSON: [];
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
    renderPageContentFromJSON(pageJSON) {
        //Get the page content as array of JSON if defined
        var contentArr = this.getThisPageContentArrayX(pageJSON);

        var stringHTMLContent = '';
        // Concatenate string-format content HTML into single string
        stringHTMLContent = contentArr.map(
            element => this.turnElementToHTMLContent(element)
        )
        .join('');
        return stringHTMLContent;
    }

    render() {
        const pageJSON = this.getThisPageJSONX(this.props.pageData, this.props.pageWPSlug);
        const pageTitle = pageJSON.title?.rendered;
        const content = this.renderPageContentFromJSON(pageJSON);

        return (
            <div>
                <h1 id='page-title'>{pageTitle}</h1>
                {ReactHtmlParser(content)}
            </div>
        );
    }
}

export default BasePage;