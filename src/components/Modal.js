import React from "react";

class Modal extends React.Component {
  render() {
    const {close} = this.state;
    return(
      <div className="menu">
      <ul>
        <li onClick={close}>Dashboard</li>
        <li onClick={close}>Invitations</li>
        <li onClick={close}>Ongoing RFQs</li>
        <li onClick={close}>Offers sent</li>
      </ul>
    </div>
    );
  }
}

export default Modal;
