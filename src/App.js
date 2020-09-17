import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Sidebar/>

        {/*Widgets*/}
      </div>
    </div>
  );
}

export default App;
