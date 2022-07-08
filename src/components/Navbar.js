import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quotes',
      text: 'Quotes',
    },
  ];
  return (
    <nav className="container-fluid navbar navbar-expand-md navbar-dark bg-dark fixed-top p-2">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://sanja969.github.io/Math-Magicians">
          <img src="https://cdn.pixabay.com/photo/2017/01/31/18/16/blackboard-2026160_960_720.png" alt="" width="30" height="24" className="d-inline-block align-text-top mx-3" />
          <span>Math-Magicians</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-end justify-content-end text-center" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto">
            {links.map((link) => (
              <li key={link.id} data-testid={link.id}>
                <NavLink to={link.path} className="nav-item text-decoration-none">
                  <p className="nav-link pt-4">
                    {link.text}
                  </p>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
