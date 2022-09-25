import React from "react";
import "../stylesheets/header-stylesheet.css";

function Header(props) {
    return (
        //Aquí se define el header completo , izquierda , centro y derecha separados con su div respectivo
        
        <div className="menu-main-container">
            <nav className="navbar">
                <div className="container-fluid">
                    <div className = "container-left">
                    <a className="navbar-brand" href="#" >
                            <img src={require(`../images/icon-control.png`)} class="d-inline-block align-text-top"  width = "50" height = "50" alt="imagen-de-logo" />
                        </a>
                    </div>

                    <div className = "container-middle">
                        <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Support
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Reviews
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Rankings
                            </a>
                        </li>
                    </ul>
                    </div>  


                    <div className="items-right">
                        <ul className="nav" id="nav-right">
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-search.png`)} class="d-inline-block align-text-top" width="25" height="25" />
                                </a>

                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-user.png`)} class="d-inline-block align-text-top" width="25" height="25" />
                                </a>

                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-cart.png`)} class="d-inline-block align-text-top" width="25" height="25" />
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
