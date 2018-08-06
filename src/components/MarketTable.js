import React from "react";
import MarketDetail from "./MarketDetail";

class MarketTable extends React.Component {
  render() {
    const { selectedMarketState, type, markets } = this.props;
    /*Create a local variable nameMap to make difference between the tables received */
    const nameMap = {
      invitation: "Invitations",
      rfq: "Ongoing RFQs",
      offersent: "Offers sent"
    };

    const name = nameMap[type];

    const style = { display: "none" };

    /*This condition makes MarketTables appear or not = Filter */
    if (selectedMarketState === null || type === selectedMarketState) {
      style.display = "block";
    }

    return (
      <article className="dbs__pis__market-table" style={style}>
        <div className="dbs__pis__market-table__title">{name}</div>
        <div className="dbs__pis__market-table__heading">
          <div className="dbs__pis__market-table__heading--wrap">
            <div>Company - Name / Technology</div>
            {type !== "invitation" ? <div>Offer Amount</div> : null}
          </div>
          <div className="dbs__pis__market-table__heading--wrap">
            <div className="dbs__pis__market-table__heading__status-suppliers">
              N° of suppliers
            </div>
            <div>Your status</div>
          </div>
        </div>
        <div>
          {markets.map(market => (
            <MarketDetail key={market.id} type={type} {...market} />
          ))}
        </div>
      </article>
    );
  }
}

export default MarketTable;
