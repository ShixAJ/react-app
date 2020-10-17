import React from "react";

//Stateless Functional Component... For props we pass props as a parameter
//instead of using props and keep calling it we can use Object Destructuring to simplify things
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pull badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
