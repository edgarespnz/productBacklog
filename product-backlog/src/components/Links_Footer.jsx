import React from "react";
import "../stylesheets/Links_Footer.css"

function Links_Footer(props){
    return(
        <div class="col-lg-8 col-md-6 mb-4 mb-md-0">
                <ul className="list-unstyled mb-0">
                    <li className="link-box">
                        <a className = "link-item" href={props.link_item1} class="text-white">{props.item1}</a>
                    </li>

                    <li className="link-box">
                        <a className = "link-item" href={props.link_item2}class="text-white">{props.item2}</a>
                    </li>
                    
                    <li className="link-box">
                    <a className = "link-item" href={props.link_item3} class="text-white">{props.item3}</a>
                    </li>
                </ul>
        </div>
    );
}

export default Links_Footer;