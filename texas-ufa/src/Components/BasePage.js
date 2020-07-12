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
        console.log(contentJSON)
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

        var className = e.attr?.class? `class='${e.attr?.class}'` : '';
        var style = e.attr?.style? `style='${e.attr?.style}'` : '';
        var href = e.attr?.href? `href='${e.attr?.href}'` : (
            e.attr?.rel? `href='${e.attr?.rel}'` : '');
        var src = e.attr?.src? `src='${e.attr?.src}'` : '';
        var rel = e.attr?.rel? `rel='${e.attr?.rel}'` : '';

        switch(e.tag) {
            case 'hr':
                content += `<${e.tag} ${className} ${style} ${href} ${src} ${rel}></${e.tag}>`;
                break;
            case 'img':
                var alt = e.attr?.alt? `alt='${e.attr?.alt}'` : '';
                var sizes = e.attr?.sizes? `sizes='${e.attr?.sizes}'` : '';
                var srcset = e.attr?.srcset? `srcset='${e.attr?.srcset}'` : '';
                content += `<${e.tag} ${className} ${style} ${href} ${src} ${alt} ${sizes} ${srcset} ${rel}></${e.tag}>`;
                break;
            default:
        }

        if(!e.child) {
            return content;
        }

        e.child.forEach(el => {
            var childContent = '';
            if(!el.text) {
                childContent += this.turnElementToHTMLContent(el)
                content += `<${e.tag} ${className} ${style} ${href} ${src} ${rel}>${childContent}</${e.tag}>`;
            } else {
                content += `<${e.tag} ${className} ${style} ${href} ${src} ${rel}>${el.text}</${e.tag}>`;    
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