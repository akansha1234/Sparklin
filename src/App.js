import React from 'react';
import './App.css';
import Footer from './Footer';
import Left from './Left';
import Middle from './Middle';
import Nav from './Nav';
import Right from './Right';
function App() {
  return (
    <div>
      <Nav/>
      <div className="app">
      <Left/>
      <Middle/>
      <Right/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
