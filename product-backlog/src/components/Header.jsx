import React from "react";
import "../stylesheets/header-stylesheet.css";

function Header(props) {
    return (
        //Aquí se define el header completo , izquierda , centro y derecha separados con su div respectivo
        <div className="menu-main-container">

            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img className="brand-image" src={require(`../images/icon-${props.brandIconName}.png`)} class="d-inline-block align-text-top" width="50" height="50" />
                    </a>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                {props.item1}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.item2}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.item3}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.item4}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                {props.item5}
                            </a>
                        </li>
                    </ul>
                
                    <div className = "items-right">
                        <ul className="nav" id="nav-right">
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-${props.iconNameRight1}.png`)} class="d-inline-block align-text-top" width="50" height="50" />
                                </a>
                                
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-${props.iconNameRight2}.png`)} class="d-inline-block align-text-top" width="50" height="50" />
                                </a>
                                
                            </li>
                            <li className="nav-item">
                                <a href="#">
                                    <img className="icon-right" src={require(`../images/icon-${props.iconNameRight3}.png`)} class="d-inline-block align-text-top" width="50" height="50" />
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
