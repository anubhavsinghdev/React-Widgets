import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" ><span className="item">Accordion</span></Link>
            <Link to="/list" ><span className="item">Search</span></Link>
            <Link to="/dropdown" ><span className="item">Dropdown</span></Link>
            <Link to="/translate" ><span className="item">Translate</span></Link>
        </div>
    );
}

export default Header;