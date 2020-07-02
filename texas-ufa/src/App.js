import React from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home/Home';
import Header from './Components/Header';

import About from './Components/About/About';
import InvestmentTeams from './Components/InvestmentTeams/InvestmentTeams';
import OfficerBoard from './Components/Board/OfficerBoard';
import Alumni from './Components/Alumni/Alumni';
import CorporatePartners from './Components/CorporatePartners/CorporatePartners';
import JoinUs from './Components/JoinUs/JoinUs';
import Contact from './Components/Contact/Contact';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      allPageData: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    this.fetchDataFromWordPress();
  }

  async fetchDataFromWordPress() {
    // Retrieve page page JSON data from WordPress DB via unique slug=<page title>
    await axios.get('http://texasufa.com/wp/wp-json/wp/v2/pages/')
        .then(res => {
            // Pull out the page JSON data
            const pageData = res.data;
            // Set state to include JSON data and page title
            this.setState ({
                allPageData: pageData,
                isLoaded: (pageData != null),
            })
        })
        .catch(err => console.log(err));  
  }

  //TODO: Make each page dynamically appear based on pages defined in WordPress
  render() {
    // Do not render without data
    if(!this.state.isLoaded) {
      return (<div/>);
    }
    const pageData = this.state.allPageData;
    return (
      <div>            
        <Router>
          <Header/>
          <Switch>
              <Route exact path='/' render={()=><Home pageData={pageData}/>}/>
              <Route path='/about' render={()=><About pageData={pageData}/>}/>
              <Route path='/investment-teams' render={()=><InvestmentTeams pageData={pageData}/>}/>
              <Route path='/officer-board' render={()=><OfficerBoard pageData={pageData}/>}/>
              <Route path='/alumni-network' render={()=><Alumni pageData={pageData}/>}/>
              <Route path='/corporate-partners' render={()=><CorporatePartners pageData={pageData}/>}/>
              <Route path='/join-us' render={()=><JoinUs pageData={pageData}/>}/>
              <Route path='/contact' render={()=><Contact pageData={pageData}/>}/>
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    );
  }
}

export default App;
