import React, {Component, Fragment,} from 'react';
import NavigationBar from './NavigationBar';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <NavigationBar/>
                {this.props.children}
            </Fragment>

        )
    }
}

export default Header;