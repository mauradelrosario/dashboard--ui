import React from "react";

class FooterContact extends React.Component {
  render() {
    return (
      <footer className="dbs__panel-footer">
        <div className="dbs__panel-footer__copyright">
          <span className="dbs__panel-footer__span">© 2018 Inter Action Digital.</span>
          <span className="dbs__panel-footer__span"> All rights reserved.</span>
        </div>
        <div className="dbs__panel-footer__legal-notices">
          <span className="dbs__panel-footer__span">Legal notices</span>
          <span className="dbs__panel-footer__span">General Terms and Conditions of Sales</span>
        </div>
        <div className="dbs__panel-footer__logo">
          <i className="fa x2 fa-pied-piper-alt" />
        </div>
        <div className="dbs__panel-footer__contact">
          <span className="dbs__panel-footer__span">
            <i className="fa fa-phone" />
            +33 (0)1 0909 09 09
          </span>
          <span className="dbs__panel-footer__span">
            <i className="fa fa-envelope" />
            customersupport@dada.com
          </span>
        </div>
        <div className="dbs__panel-footer__localisation">
          <i className="fa fa-map-marker" />
          <div>
            <span className="dbs__panel-footer__span"> Station F</span>
            <span className="dbs__panel-footer__span">75000 Paris FRANCE</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterContact;
