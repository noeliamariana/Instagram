import React, { useState } from 'react';
import Post from "./components/posts/Post";
import './App.css';
import { Header } from './components/header/Header';
import './styles/global.css'

function App() {


  return (
    <div className="App">

        <Header />
        <Post />
        
    </div>
  );

}

export default App;
