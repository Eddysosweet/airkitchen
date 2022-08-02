import React from 'react';
import './App.css';
import Home from './Home';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Home />
      <div className='account'>
        <Menu />
      </div>
    </div>
  )
}

export default App;
