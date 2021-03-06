import React, { Component, createRef } from 'react';
import axios from 'axios';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from 'react-router-scroll-top';

import Home from './Components/Home/Home';
import Header from './Components/Header';
import ProgressBar from './Components/ProgressBar';
import Footer from './Components/Footer';

import About from './Components/About/About';
import Teams from './Components/Teams/Teams';
import OfficerBoard from './Components/Board/OfficerBoard';
import Alumni from './Components/Alumni/Alumni';
import CorporatePartners from './Components/CorporatePartners/CorporatePartners';
import JoinUs from './Components/JoinUs/JoinUs';
import NotFoundPage from './NotFoundPage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allPageData: [],
      isLoaded: false,
    }
    this.progressBarRef = createRef();
  }

  componentDidMount() {
    this.fetchDataFromWordPress();
  }

  async fetchDataFromWordPress() {
    // Retrieve page page JSON data from WordPress DB via unique slug=<page title>
    await axios.get('https://texasufa.com/wp/wp-json/wp/v2/pages/')
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
      <div ref={this.progressBarRef}>            
        <Router>
          <ScrollToTop>
            <Header>          
              <ProgressBar target={this.progressBarRef}/>
            </Header>
            <div className='content-below-navbar'>
              <Switch>
                  <Route exact path='/' render={()=><Home pageData={pageData}/>}/>
                  <Route path='/about' render={()=><About pageData={pageData}/>}/>
                  <Route path='/teams' render={()=><Teams pageData={pageData}/>}/>
                  <Route path='/officer-board' render={()=><OfficerBoard pageData={pageData}/>}/>
                  <Route path='/alumni-network' render={()=><Alumni pageData={pageData}/>}/>
                  <Route path='/corporate-partners' render={()=><CorporatePartners pageData={pageData}/>}/>
                  <Route path='/join-us' render={()=><JoinUs pageData={pageData}/>}/>
                  <Route path='*' component={NotFoundPage}/>
              </Switch>
            </div>
            <Footer/>
          </ScrollToTop>
          
        </Router>
      </div>
    );
  }
}

export default App;
