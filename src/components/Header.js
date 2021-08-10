import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Library Book Management</h1>
      <hr />
      <div className="links">
        <NavLink to="/" id="list" className="link" activeClassName="active" exact>
          Books List
        </NavLink>
        <NavLink to="/add" id="add" className="link" activeClassName="active">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;