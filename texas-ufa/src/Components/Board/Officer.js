import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Officer extends Component {

    static propTypes = {
        officer: PropTypes.object.isRequired,
    }

    render() {
        // Extract each needed field from JSON
        const {title} = this.props.officer;
        const customFields = this.props.officer.acf;
        const {
            officer_position, 
            officer_class_standing,
            officer_image, 
            officer_linked_page,
            officer_ordering_number
        } = customFields;

        /**
         * Officer Panel structure:
         *      Position
         *      Image
         *      Name
         * *More details fade in on mouse hover*
         */
        return (
            <a className="officer-card-container-link" href={officer_linked_page} style={{order: `${officer_ordering_number}`}}>
                <div className='officer-card'>
                    <div className='officer-image-container'>
                        <img className='officer-image' src={officer_image.sizes.large} alt={title.rendered}/>
                    </div>
                    <div className='officer-info-container'>
                        <h2 className='officer-name'>{title.rendered}</h2>
                        <p className='officer-position'>{officer_position}</p>
                        <p className='officer-class-standing'>{officer_class_standing}</p>
                    </div>
                </div>
            </a>
        ); 
    }

}

export default Officer;