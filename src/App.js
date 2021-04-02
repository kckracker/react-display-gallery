// Imports for App dependencies
import React, {Component} from 'react';
import apiKey from './config';

// Imports components
import SearchBar from './SearchBar';
import NavTerms from './NavTerms';
import PhotoList from './PhotoList';
import NotFound from './NotFound';


class App extends Component {

    state = {
        results: false
    }

    performSearch = (query) => {
        return(
            <PhotoList query={query}/>
        )
    }

    render(){
        return(
        <div className="container">
        <SearchBar search={this.performSearch}/>
        <NavTerms />
        </div>
        )
    }


}

export default App;

/* 
    1. Create React App - install depencdencies
    2. Using the index.html file provided (in examples/), create your components
        - App containing div .container, SearchBar, ternary operator displaying PhotoList if results = true : NotFound if results = false
        - SearchBar containing form .search-form, input, search button .search-button (check svg and path tags as well), NavTerms
        - NavTerms containing ul, li, a tags (or Switch enabled routes upon click)
        - PhotoList containing div .photo-container, h2 "Results", Photos
        - Photos containing ul, li, img (dynamically inserting using map on fetch array and using api info to inform src property)
        - NotFound containing li .not-found, h3 "No Results Found", p "Your search did not return any results. Please try again."

    * Use ref to create reference to input keyed by user upon submit || enter
*/