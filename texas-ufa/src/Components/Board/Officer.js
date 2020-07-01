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
        } = customFields;

        /**
         * Officer Panel structure:
         *      Position
         *      Image
         *      Name
         * *More details fade in on mouse hover*
         */
        return (
            <div class="officer-info">
                <img src={officer_image.sizes.medium} alt={title.rendered}/>
                <h2>{title.rendered}</h2>
                <h3>{officer_position}</h3>
                <h3>{officer_class_standing}</h3>
                <h3>{officer_linked_page}</h3>
            </div>
        ); 
    }

}

export default Officer;