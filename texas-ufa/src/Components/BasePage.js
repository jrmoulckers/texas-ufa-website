import React, {Component,} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './BasePage.css'

class BasePage extends Component {
    constructor(props) {
        super(props);
    }

    getThisPageJSONX(pageData, wpSlug) {
        // Pull out the page JSON data for this page's WordPress slug
        const pageJSON = pageData.find(element => (
            element.slug === wpSlug
        ));
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
        console.log(e);
        if(e.tag === 'img' || e.tag === 'path' || e.tag === 'a') {
            return content;
        }
        if(!e.child) {
            return content;
        }
        e.child.forEach(el => {
            var childContent = '';
            var className = e.attr?.class? `class='${e.attr?.class}'` : '';
            var style = e.attr?.style? `style='${e.attr?.style}'` : '';
            var href = e.attr?.href? `href='${e.attr?.href}'` : '';
            var src = e.attr?.src? `style='${e.attr?.src}'` : '';
            if(!el.text) {
                childContent += this.turnElementToHTMLContent(el)
                content += `<${e.tag} ${className} ${style} ${href} ${src}>${childContent}</${e.tag}>`;
            } else {
                switch(e.tag) {
                    case 'p':
                    case 'strong':
                    case 's':
                    case 'a':
                    case 'code':
                    case 'figcaption':
                    case 'blockquote':
                    case 'h1':
                    case 'h2':
                    case 'h3':
                    case 'h4': 
                    case 'h5':
                    case 'em':
                    case 'div':
                    case 'figure':
                    case 'pre':
                    case 'li':
                    case 'ul':
                    case 'ol':
                    case 'cite':
                    case 'span':
                        content += `<${e.tag} ${className} ${style} ${href} ${src}>${el.text}</${e.tag}>`;
                        break;
                    default:
                        content += `<p class='${e.attr.class}'>${e.tag}: Not yet implemented :(</p>`;
                // Use react-html-parser api to turn string into JSX 
                }
            }            
        })
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
            <div className='base-page' id={`page-${this.props.pageWPSlug}`}>
                {ReactHtmlParser(content)}
            </div>
        );
    }
}

export default BasePage;