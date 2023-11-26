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
        <h1>App Wowzers!</h1>
    );
}

export default App;