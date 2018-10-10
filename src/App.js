
import React, { Component } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Map from './components/Map/Map';
import axios from 'axios';
import escapeRegExp from 'escape-string-regexp';


class App extends Component {

  state = {
    venues: [],
    showingLocations: '',
    query: '',
    marker: {},
    currentMarker: undefined
  }

  componentDidMount(){
    this.getVenues()
  }

  updateQuery = query => {
    this.setState({ query })
  }


  getVenues = () => {

    // Foursquare API Information
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: "TJNBOWFRAENKF0VQSTZ0UNSBW4XHQER3WZJUAZ25JVKS3FXG",
      client_secret: "3G1K42W4GL4FO2S5H2GQYXVSWIJHTI0UX00F4SF5HZICSVQK",
      query: 'food',
      near: 'Indiana',
      v: '20180510'
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.groups[0].items
        })
      })
      .catch(error => {
        console.log('Failed in retrieving Foursquare info: ' + error + ' Please try again later!')
      })
  }

 
  onMarkerClick = marker => {
    this.setState({ currentMarker: marker })
  }

  openNavigation()  {
    document.getElementById("navbar").style.width = "200px";
  }

  closeNavigation() {
      document.getElementById("navbar").style.width = "0"; 
  }

  render() {
      let showingLocations

    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query, 'i'))
      showingLocations = this.state.venues.filter((venue) => match.test(venue.venue.name))
    } else {
      showingLocations = this.state.venues
    }
 
    return (
      <main>
        <div className='App'>
          <Header
            hamburgerOpen={this.openNavigation}
          />
        <Sidebar
            getVenues={this.getVenues}
            hamburgerClose={this.closeNavigation}
            venues={this.state.venues}
            query={this.state.query}
            showingLocations={showingLocations}
            updateQuery={this.updateQuery}
            markerClicked={this.onMarkerClick}
        />
          <Map
            showingLocations={showingLocations}
            markerClicked={this.onMarkerClick}
            currentMarker={this.state.currentMarker}
          />
        </div>
      </main>
    );
  }
}

export default App;