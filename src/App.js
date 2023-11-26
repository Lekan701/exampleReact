import {useEffect} from "react";

import './App.css';
import SearchIcon from './search.svg'

//ce6fe8bb

const API_URL = 'http://www.omdbapi.com?apikey=ce6fe8bb'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search)
    }

    useEffect(() => {
        searchMovies('Batman')
    }, []);
    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for zoovies" 
                    value="Sooperman"
                    onChange={() => {}}
                />
            </div>
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => {}}
            />
        </div>
    );
}

export default App;