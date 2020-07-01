import React, {Component,} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavigationBar from './NavigationBar';

import Home from './Home/Home';
import About from './About/About';
import InvestmentTeams from './InvestmentTeams/InvestmentTeams';
import OfficerBoard from './Board/OfficerBoard';
import Alumni from './Alumni/Alumni';
import CorporatePartners from './CorporatePartners/CorporatePartners';
import JoinUs from './JoinUs/JoinUs';
import Contact from './Contact/Contact';

class Header extends Component {
    render() {
        return (
            <Router>
                <NavigationBar/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/investment-teams' component={InvestmentTeams}/>
                    <Route exact path='/officer-board' component={OfficerBoard}/>
                    <Route exact path='/alumni-network' component={Alumni}/>
                    <Route exact path='/corporate-partners' component={CorporatePartners}/>
                    <Route exact path='/join-us' component={JoinUs}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </Router>
        )
    }
}

export default Header;