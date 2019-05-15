import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/organisms/header';
import NavBar from './components/molecules/navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar/>
    </div>
  );
}

export default App;
