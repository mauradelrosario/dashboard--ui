import React from "react";

class FooterContact extends React.Component {
  render() {
    return (
      <footer className="dbs__panel-footer">
        <div className="dbs__panel-footer__copyright">
          <span>© 2018 Inter Action Digital.</span>
          <span> All rights reserved.</span>
        </div>
        <div className="dbs__panel-footer__legal-notices">
          <span>Legal notices</span>
          <span>General Terms and Conditions of Sales</span>
        </div>
        <div className="dbs__panel-footer__logo">
          <i className="fa x2 fa-pied-piper-alt" />
        </div>
        <div className="dbs__panel-footer__contact">
          <span>
            <i className="fa fa-phone" />
            +33 (0)1 0909 09 09
          </span>
          <span>
            <i className="fa fa-envelope" />
            customersupport@dada.com
          </span>
        </div>
        <div className="dbs__panel-footer__localisation">
          <i className="fa fa-map-marker" />
          <div>
            <span> Station F</span>
            <span>75000 Paris FRANCE</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterContact;
