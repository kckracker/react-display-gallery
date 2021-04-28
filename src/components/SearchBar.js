// Imports dependencies
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SearchBar = (props) => {

    // Storing value to Ref in the variable inputRef for ease of reference to the input value
    const inputRef = React.createRef();

    // Creating useState hook references to reference local input state without a class component.
    const [searchText, setSearchText] = useState("");
    
    /** Function call to send input data as a search to Flickr API
     * {event} - accepts an event as a parameter
     * Prevents default event if the searchText state date is empty and supplies an alert for the user to input a string to search
     * 
     * Else if the hook data does not equal the state searchText supplied by props, call setSearchText passing in the 24 photo limit and searchText hook data as search parameter
     * 
     * A call to performSearch via the props search is made passing in the searchText hook data and the input ref is cleared to allow for another search to be made.
     */
    const sendSearch = (e) => {
        if(!searchText){
            e.preventDefault();
            alert("Please enter a search query to see results.")
            return
        } else if(props.text !== searchText){
            props.term(searchText)
        }
        props.search(24, searchText);
        inputRef.current.value = "";
    }

    // Return form with an input containing the ref attribute, onKeyUp listener for setting the searchText hook data, and a placeholder. Wrapping the button tag in a Link JSX tag to have the './search' path routed upon submission of form. The Link tag also containes the onClick listener to run sendSearch, passing in the submit event.
    return(
        <form className="search-form">
            <input type="search" name="search" placeholder="Search" required ref={(inputRef)} onKeyUp={() => setSearchText(inputRef.current.value) } />
            <Link to={`/search/${searchText}`} onClick={(e) => sendSearch(e) } >
                <button type="submit" className="search-button">
                    <svg ill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        <path d="M0 0h24v24H0z" fill="none"/>
                    </svg>
                </button>
            </Link>
            
            
            
        </form>
    )
}  


export default SearchBar;