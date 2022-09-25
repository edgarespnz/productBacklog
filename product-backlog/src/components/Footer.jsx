import React from "react";
import "../stylesheets/footer-stylesheet.css"
import Links_Footer from "./Links_Footer";

function Footer(props) {
    return (
        <div className="container-footer">

            <footer >
                <div class="row">
                    <div class="col-5">

                        <div className="container-title">
                            <h3 class="inside-text">Sign up to our newsletter for the latest PC news</h3>
                        </div>

                        <div className="container-email-suscribe">

                            <div class="container-fluid">
                                <form class="d-inline-flex">
                                    <input class="form-control me-3" type="search" placeholder="Email" aria-label="email" />
                                    <button class="btn btn-outline-success" type="submit">Suscribe</button>
                                </form>
                            </div>

                        </div>

                        <div className="container-social-media">
                        <a href="#" class="fa fa-facebook"></a>
                        <a href="#" class="fa fa-twitter"></a>
                        <a href="#" class="fa fa-instagram"></a>

                        </div>

                    </div>


                    <div class="col-4">
                        <Links_Footer
                            item1="Build Your PC"
                            item2="Why Redux"
                            item3="Support"
                        />


                        <Links_Footer
                            item1="Good"
                            item2="Better"
                            item3="Best"
                        />


                        <Links_Footer
                            item1="Terms & conditions"
                            item2="Privacy Policy"
                            item3="Private Policy"
                        />


                    </div>


                </div>
            <div className="row copyright"> Copyright © Sitio web creado por DQ_Tech</div>
            </footer>
        </div>
    );
}
export default Footer;