import React, {Component} from 'react';
import axios from 'axios';
import Officer from './Officer'

class OfficerTeam extends Component {
    state = {
        officers: [],
        isLoaded: false,
    }

    componentDidMount() {
        // Retrieve officer JSON data from WordPress DB
        axios.get('https://texasufa.com/wp/wp-json/wp/v2/officers?per_page=100')
            .then(res => this.setState ({
                officers: res?.data,
                isLoaded: true,
            }))
            .catch(err => console.log(err));
    }

    render() {
        const {officers,} = this.state;
        return (
            <div className='officers-container'>
                <div className='officers-container-inner'>
                    {/* Map each officer to display */}
                    {officers?.map(officer => (
                        <Officer key={officer.id} officer={officer}/>
                    ))}
                </div>

            </div>
        );
    }
}

export default OfficerTeam;