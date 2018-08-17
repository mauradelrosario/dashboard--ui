import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <aside className="dbs__menu-sidebar">
        <div className="dbs__menu-sidebar__items">
          <ul>
            <li>
              <i className="fa fa-arrows" />
            </li>
            <li>
              <i className="fa fa-arrows" />
            </li>
          </ul>
        </div>
        <div className="dbs__menu-sidebar__items__user-circle">
          <i className="fa fa-user-circle" />
        </div>
        <label
          className="dbs__menu__burger"
          for="menu-main"
          data-js-menu-burger
        >
          =
        </label>
        
      </aside>
    );
  }
}

export default Menu;
