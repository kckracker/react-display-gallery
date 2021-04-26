import React from 'react';
import PhotoList from './PhotoList';
import {useHistory} from 'react-router-dom';

const Home = (props) => {

    if(props.results && props.data.length === 3){
        return( 
                <PhotoList data={props.data} title={props.title} />
        )
    } else {
        return(
            <h3>Loading...</h3>
        )
    }
    

}

export default Home;