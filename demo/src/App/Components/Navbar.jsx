import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto d-flex align-items-center ">
              <li className="nav-item ">
                <Link className="navbar-brand text-success fs-4" to="/">All Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success fs-4" to="addMovie">Add Movie</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
export default Navbar;
