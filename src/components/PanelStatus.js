import React from "react";
import MarketStatus from "./MarketStatus";

class PanelStatus extends React.Component {
  render() {
    const {
      selectedMarketState,
      onSelectedMarket,
      invitations,
      rfqs,
      offersSent
    } = this.props;
    return (
      <header className="dbs__ps">
        <div className="dbs__ps--wrap">
          <MarketStatus
            type="invitation"
            markets={invitations}
            onSelectedMarket={onSelectedMarket}
            selectedMarketState={selectedMarketState}
          />
          <MarketStatus
            type="rfq"
            markets={rfqs}
            onSelectedMarket={onSelectedMarket}
            selectedMarketState={selectedMarketState}
          />
          <MarketStatus
            type="offersent"
            markets={offersSent}
            onSelectedMarket={onSelectedMarket}
            selectedMarketState={selectedMarketState}
          />
        </div>
      </header>
    );
  }
}

export default PanelStatus;
