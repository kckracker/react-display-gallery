// Imports dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

const NavTerms = (props) => {

    // Function accepts event as a parameter. The setSearchText function is called and passed the value of the text content stored in the target link. Next, the performSearch function is called with 24 for the photo limit and the value of the target link as the search term.
    const navigateSearch = (e) => {
        props.term(e.target.textContent);
        props.search(24, e.target.textContent)
    }

    // Returning nav section with nexted NavLink tags pointing to './search' path and listening for click event to run the navigateSearch function above.
    return(
    <nav className="main-nav">
        <ul>
            <li><NavLink to={`/search/fjords`} onClick={() => navigateSearch}>fjords</NavLink></li>
            <li><NavLink to={`/search/sunsets`} onClick={() => navigateSearch}>sunsets</NavLink></li>
            <li><NavLink to={`/search/skylines`} onClick={() => navigateSearch}>skylines</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavTerms;
