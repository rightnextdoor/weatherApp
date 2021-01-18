import React,{useState} from 'react';
import './App.css';
import {Link} from 'react-router-dom';



function Home() {
  return (
    <div className="home">
     <h1>Weather App</h1>
    <div>
      <h2>Search weather by city</h2>
      <Search />
    </div>
  </div>
  );
}
const Search = (props) => {

    
  return (
      <div className="search-box">
          
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={props.handleChange}
            
          />
           </div>
       )
}

export default Home;