// Imports dependencies
import React from 'react';
import {NavLink} from 'react-router-dom';

const NavTerms = (props) => {

    // Returning nav section with nexted NavLink tags pointing to './search' path and listening for click event to run the setSearchText and performSearch functions received as props.
    return(
    <nav className="main-nav">
        <ul>
            <li><NavLink to={`/search/fjords`} onClick={(e) => {
                props.term(e.target.textContent);
                props.search(24, e.target.textContent)}}>fjords</NavLink></li>
            <li><NavLink to={`/search/sunsets`} onClick={(e) => {
                props.term(e.target.textContent);
                props.search(24, e.target.textContent)}}>sunsets</NavLink></li>
            <li><NavLink to={`/search/skylines`} onClick={(e) => {
                props.term(e.target.textContent);
                props.search(24, e.target.textContent)}}>skylines</NavLink></li>
        </ul>
    </nav>
    )
}

export default NavTerms;
