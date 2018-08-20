import React from "react";

class SideBar extends React.Component {
  render() {
    return (
      <aside className="dbs__sidebar">
        <div className="dbs__sidebar__items">
          <ul>
            <li>
              <i className="fa fa-arrows" />
            </li>
            <li>
              <i className="fa fa-arrows" />
            </li>
          </ul>
        </div>
        <div className="dbs__sidebar__items__user-circle">
          <i className="fa fa-user-circle" />
        </div>
      </aside>
    );
  }
}

export default SideBar;