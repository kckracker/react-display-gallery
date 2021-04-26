import React from 'react';
import PhotoList from './PhotoList';
import {Link, useParams, useHistory} from 'react-router-dom';



const Search = (props) => {


    
    let term = useParams();
    let history = useHistory();

    const storeHistory = () => {
        history.push(`/search/${term.term}`, props.data)
        console.log(history)
    }

  

    if(props.results && props.text && term.term === props.text){
        return( 
        <div>
            <PhotoList data={props.data} title={`Photos of ${props.text}`}  />
            <nav className="main-nav">
                <Link exact to='/' onClick={() => storeHistory()} >Go Home</Link>
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
                <Link exact to='/' onClick={() => props.search(3)} >Go Home</Link>
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