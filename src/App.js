// Imports for App dependencies
import React, {Component} from 'react';
import apiKey from './config';
import {
    Switch,
    Route
    } from 'react-router-dom';
import axios  from 'axios';

// Imports components
import Home from './components/Home';
import Search from './components/Search';
import SearchBar from './components/SearchBar';
import NavTerms from './components/NavTerms';
import NotFound from './components/NotFound';





class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            results: true,
            searchText: "",
            photos: [],
            homePhotos: []
        }
        this.setSearchText = this.setSearchText.bind(this);
        this.performSearch = this.performSearch.bind(this);
    }

    
    // Calling performSearch upon mount to ensure defaul photos load
    componentDidMount(){
        this.performSearch();
        this.setState({
            homePhotos: this.props.photos
        })
    }

     /** Function to set state searchText from SearchBar or NavTerm components 
     * {text} - accepts string of text from navigation or user input
     * */ 
    setSearchText = (text) => {
        if(!text){
            alert("Please enter a value for your search!")
        } else {
            this.setState({
                searchText: text
            })
        }
    }

    /** Function to generate photos from search or navigation from Flickr API 
     * {number} - accepts number to request limit of photos
     * {text} - accepts string from state searchText
     * */ 
    performSearch = (number = 3, text = "fjord%2C+sunset%2C+skyline" ) => {
        if(text === ""){
            return
        } else {
            this.setState({
                results:false
            })
            axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}&safe_search=1&content_type=1&per_page=${number}&format=json&nojsoncallback=1`)
            .then(data => {
                if(number === 3){
                    this.setState({
                        homePhotos: data.data.photos.photo,
                        results: true 
                    })
                } else {
                    this.setState({
                        photos: data.data.photos.photo,
                        results: true 
                    })
                }
            })
        }
    }


    render(){

        return(
                <div className="container">
                <SearchBar 
                    search={this.performSearch } 
                    term={this.setSearchText}
                    text={this.state.searchText}
                    />
                <NavTerms 
                    search={this.performSearch} 
                    term={this.setSearchText}
                    text={this.state.searchText} 
                    />
                <Switch> 
                    <Route path={`/search/:term`} >
                        <Search 
                                term={this.setSearchText}
                                text={this.state.searchText} 
                                results={this.state.results}
                                data={this.state.photos} 
                                search={this.performSearch}
                        /> 
                    </Route>
                    <Route exact path="/" >
                        <Home 
                            search={this.performSearch}
                            results={this.state.results}
                            data={this.state.homePhotos}
                            title="React Display Gallery"
                        />
                    </Route>                    
                    <Route>
                        <NotFound
                            home={this.performSearch}
                         />
                    </Route>
                 </Switch>
                </div>
        )
    }


}

export default App;

