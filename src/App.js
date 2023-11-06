import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Overlay from "./components/Overlay"
import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [showOverlay, setShowOverlay] = useState(false);
  console.log(searchResults);
  const search = (query) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=840de593b7028de6e424162454790fe5`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data);
        setShowOverlay(true);
      })
      .catch((error) => console.error(error));
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div className="App">
      <SearchBar onSearch={search} />
      {showOverlay && (
        <Overlay data={searchResults} onClose={closeOverlay} />
      )}
    </div>
  );
}

export default App;

