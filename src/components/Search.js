import React from 'react';
import PhotoList from './PhotoList';
import {Link, useParams } from 'react-router-dom';



const Search = (props) => {


    // Using the hook useParams to gather info about how the current url matches the route returned
    let term = useParams();
      
    /* If prop results returns true and the searchText set in state matches the value of the search term found in the url, return a div containing the PhotoList component supplied with props from App and a nav section containing a link to the home page. 
    
    Else if the searchText data in App state does not match the term value from useParams, call setSearchText with the term value, call the performSearch function for 24 photos with the term value as search text, and return updated PhotoList component. 
    
    Else, if all parameters are not met and results are pending, return h3 Loading tag. */
    if(props.results && term.term === props.text){
        return( 
        <div>
            <PhotoList data={props.data} title={`Photos of ${props.text}`}  />
            <nav className="main-nav">
                <Link to='/'>Go Home</Link>
            </nav>
        </div>
        )
    } else if(term.term !== props.text){
        props.term(term.term);
        props.search(24, term.term);
        return(
            <div>
            <PhotoList data={props.data} title={`Photos of ${props.text}`}  />
            <nav className="main-nav">
                <Link to='/'>Go Home</Link>
            </nav>
            </div>
        )
    } else {
        return(
            <h3>Loading...</h3>
        )
    }

}

export default Search;