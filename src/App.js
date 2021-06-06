import React from 'react';
import './App.css';
import Header from './Header'
import Main from './Main'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app__page'>
        <Main />
      </div>
    </div>
  );
}

export default App;
