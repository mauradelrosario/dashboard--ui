import React from "react";

class MarketDetail extends React.Component {
  render() {
    const {
      type,
      company_name,
      company_techno,
      nb_suppliers,
      offer_amount,
      status
    } = this.props;

    return (
      <div
        className={
          "dbs__pis__market-table__details dbs__pis__market-table__details__bordure-left--" +
          type
        }
      >
        <div className="dbs__pis__market-table__details--wrap">
          <div className="dbs__pis__market-table__details__name-technology">
            <div>{company_name}</div>
            <div>{company_techno}</div>
          </div>
          {type !== "invitation" ? <div>{offer_amount}</div> : null}
        </div>
        <div className="dbs__pis__market-table__details--wrap">
          <div className="dbs__pis__market-table__details__suppliers">
            {nb_suppliers}
          </div>
          <div className="dbs__pis__market-table__details__status">
            {status ? <MakeAnOffer /> : <Approval type={type} />}
          </div>
        </div>
      </div>
    );
  }
}

class MakeAnOffer extends React.Component {
  render() {
    return (
      <button className="btn dbs__pis__market-table__details__status-offer--btn btn-sm ">
        Make an offer
      </button>
    );
  }
}

class Approval extends React.Component {
  render() {
    return (
      <div className="dbs__pis__market-table__details__status--approval">
        <i className="fa fa-user" />
        <div>
          {this.props.type === "invitation"
            ? "Awaiting for Approval"
            : "Waiting for verification"}
        </div>
      </div>
    );
  }
}

export default MarketDetail;
