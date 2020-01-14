import React from 'react';
import './Header.css';


const Header = (props) => {

    return(
        <div className="Header">
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="row">
                        <div className="site-logo">
                            <h1 className="brand">TwinCity Transit</h1>
                        </div>
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#menu">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                        {/*Collect the nav links, forms, and other content for toggling*/}
                        <div className="collapse navbar-collapse" id="menu">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Portfolio</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )

};

export default Header;