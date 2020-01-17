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
                    </div>
                </div>
            </nav>
        </div>
    )

};

export default Header;