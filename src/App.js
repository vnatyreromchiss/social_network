import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';
import ProfilePage from './components/ProfilePage/ProfilePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = (props) => {
  return (
    
      <div className="wrapper">

        <Header/>
        <Main/> 
      
      </div>
     
  ) 
}

export default App;
