import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="nav-section">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto d-flex align-items-center w-100">
                    <li>
                    <Link className="nav-link company-logo text-white">
                            TricoFin
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            System
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item item-text-size">Action</Link>
                            <Link className="dropdown-item item-text-size">Another action</Link>
                            <Link className="dropdown-item item-text-size">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Customers
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link 
                            to={{
                                pathname: `/individualcustomerform`
                            }}
                            className="dropdown-item item-text-size">Individual Customers</Link>
                            <Link className="dropdown-item item-text-size">Non Individual Customers</Link>
                            <Link className="dropdown-item item-text-size">Group Maintenance</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </Link>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item item-text-size">Action</Link>
                            <Link className="dropdown-item item-text-size">Another action</Link>
                            <Link className="dropdown-item item-text-size">Something else here</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown link-fa-user">
                    <i 
                    className="fas fa-user nav-link text-white" 
                    id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item item-text-size">Settings</Link>
                        <Link className="dropdown-item item-text-size border-icon">Log Out</Link>
                    </div>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;