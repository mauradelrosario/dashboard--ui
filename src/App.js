import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/Sidebar";
import FooterContact from "./components/FooterContact";
import PanelStatus from "./components/PanelStatus";
import PanelInfoSupliers from "./components/PanelInfoSuppliers";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: [],
      invitations: [],
      rfqs: [],
      offersSent: [],
      selectedMarket: null
    };
    this.handleSelectedMarket = this.handleSelectedMarket.bind(this);
  }
/*Calling the api && get a filter for each status*/
  componentDidMount() {
    fetch("/api/markets.json")
    .then((response) => {
      let test = response.json();
      console.log(test);
      return test;
    })
      .then(markets => {
        const invitations = this.getFilteredInvitations({ markets });
        const rfqs = this.getFilteredRfqs({ markets });
        const offersSent = this.getFilteredOffersSent({ markets });
        this.setState({
          markets,
          invitations,
          rfqs,
          offersSent
        });
      });
  }


  getFilteredInvitations({ markets }) {
    return markets.filter(market => market.statusFilter === "invitation");
  }

  getFilteredRfqs({ markets }) {
    return markets.filter(market => market.statusFilter === "rfq");
  }

  getFilteredOffersSent({ markets }) {
    return markets.filter(market => market.statusFilter === "offersent");
  }

  /*Function to change the state of selectedMarket means when user click on the box */
  handleSelectedMarket(type) {
    this.setState({
      selectedMarket: type
    });
  }

  render() {
    const { selectedMarket, invitations, rfqs, offersSent } = this.state;
    return (
      <main>
        <SideBar onSelectedMarket={this.handleSelectedMarket} />
        <div className="dbs__panel">
          <header className="dbs__panel--header">
            <PanelStatus
              selectedMarketState={selectedMarket}
              onSelectedMarket={this.handleSelectedMarket}
              invitations={invitations}
              rfqs={rfqs}
              offersSent={offersSent}
            />
          </header>
          <div className="dbs__panel--body">
            <PanelInfoSupliers
              selectedMarketState={selectedMarket}
              onSelectedMarket={this.handleSelectedMarket}
              invitations={invitations}
              rfqs={rfqs}
              offersSent={offersSent}
            />
            <FooterContact />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
