// Imports dependencies
import React, {Component} from 'react';

// Imports child component
import Photo from './Photo';



class PhotoList extends Component {
    constructor(props){
        super(props)
    }

    /* Function to be used a callback inside handleSearch function in App 
    returnPhotos = (flickrArray) => {
        flickrArray.map( photo => {
            return(
                <Photo url={photo.url{props.query}?}>
            ) 
        } )
    } */

    render(){
        return(
            <div className="photo-container">
                <h2> Your Results</h2>
                {this.returnPhotos}
            </div>
        )
    }
}

export default PhotoList;