import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light dark">
<div className="container">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}></FontAwesomeIcon>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link text-uppercase custom-spacing mx-3" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-uppercase custom-spacing mx-3" href="#">About_me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-uppercase custom-spacing mx-3" href="#">My_work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-uppercase custom-spacing mx-3" href="#">contact</a>
      </li>
    </ul>
    </div>
    </div>
</nav>

    )
}
