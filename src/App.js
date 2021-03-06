import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import FloatingDetailsV2 from './FloatingDetailsV2';
import SideBar from './SideBar'
import { DropDownContext, DropDownContextProvider } from "./context";

function App() {
  return (
    <DropDownContextProvider>
      <Router>
        <div className="App">
          <SideBar />
          <Header />
          <FloatingDetailsV2 />
          <Home />
        </div>
      </Router>
    </DropDownContextProvider>
  );
}

export default App;
