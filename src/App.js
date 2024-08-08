import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
// import LoadingBar from 'react-top-loading-bar'

function App() {

  const APP_ID = "11d78b34";
  const API_KEY = "babd0d83e107d799c5fb2984b6252fa8";


  return (
    <>
      <Navbar />
      <Recipe APP_ID={APP_ID} API_KEY={API_KEY} />
    </>
  );
}

export default App;
