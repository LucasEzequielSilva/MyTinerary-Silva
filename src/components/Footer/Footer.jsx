import React from "react";
import '../../styles/Footer.css'
import {Link as LinkRouter} from "react-router-dom"
const Footer = ()=>{
    return(
        <footer>
         <p>© 2022 MyTinerary Inc. All rights reserved.</p>
         <div className="Navv">
             <h4>NAVIGATION</h4>
             <LinkRouter to="/" className="Link">
             <button className="ButtonAppBar">
                 HOME
             </button>
             </LinkRouter>
             <LinkRouter to="/cities" className="Link">
             <button className="ButtonAppBar">
                 CITIES
             </button>
             </LinkRouter>
         </div>
        </footer>
    )
}
export default Footer;