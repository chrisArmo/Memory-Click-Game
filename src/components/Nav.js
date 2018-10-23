/**
 * Nav Component
 */

// Dependencies -------------------- /

import React from "react";

// Component -------------------- /

const Nav = (props) => (
    <div>
        <nav className={props.miss 
            ? "navbar sticky-top py-1 red-bottom"
            : "navbar sticky-top py-1 cyan-bottom"} >
            <div className="container d-flex flex-column flex-sm-row">
                <h4 className="navbar-brand">MemClicker</h4>
                <ul className="navbar-nav ml-sm-auto mt-sm-2 d-flex flex-column flex-sm-row">
                    <li className="nav-item">
                        <p className="nav-link">Score: <span>{props.currentScore}</span></p>
                    </li>
                    <li className="nav-item ml-sm-3 ml-lg-5">
                        <p className="nav-link">High Score: <span>{props.highScore}</span></p>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

// Export Component -------------------- /

export default Nav;
