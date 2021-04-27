// Imports dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

const NavTerms = (props) => {

    const navigateSearch = (e) => {
        props.term(e.target.textContent);
        props.search(24, e.target.textContent)
    }

    return(
    <nav className="main-nav">
        <ul>
            <li><NavLink to={`/search/fjords`} onClick={navigateSearch}>fjords</NavLink></li>
            <li><NavLink to={`/search/sunsets`} onClick={navigateSearch}>sunsets</NavLink></li>
            <li><NavLink to={`/search/skylines`} onClick={navigateSearch}>skylines</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavTerms;
