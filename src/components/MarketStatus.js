import React from "react";

class MarketStatus extends React.Component {
  render() {
    const { selectedMarketState, type, onSelectedMarket } = this.props;
    const nameMap = {
      invitation: "Invitations",
      rfq: "Ongoing RFQs",
      offersent: "Offers sent"
    };
    const name = nameMap[type];

    return (
      <div
        className={
          selectedMarketState && type === selectedMarketState
            ? "bs__ps__market-status bs__ps__market-status--" + type
            : "bs__ps__market-status"
        }
        onClick={() => {
          onSelectedMarket(type);
        }}
      >
        <div className="bs__ps__market-status-number">
          {this.props.markets.length}
        </div>
        <div className={"bs__ps__market-status-name-" + type}>{name}</div>
        <div className={"bs__ps__market-status--bottom-line-" + type} />
      </div>
    );
  }
}

export default MarketStatus;
