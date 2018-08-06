import React from "react";
import MarketTable from "./MarketTable";

class PanelInfoSuppliers extends React.Component {
  render() {
    const {
      selectedMarketState,
      invitations,
      rfqs,
      offersSent
    } = this.props;
    return (
      <div className="dbs__pis">
        <MarketTable
          type="invitation"
          markets={invitations}
          selectedMarketState={selectedMarketState}
        />
        <MarketTable
          type="rfq"
          markets={rfqs}
          selectedMarketState={selectedMarketState}
        />
        <MarketTable
          type="offersent"
          markets={offersSent}
          selectedMarketState={selectedMarketState}
        />
      </div>
    );
  }
}

export default PanelInfoSuppliers;
