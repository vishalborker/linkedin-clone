import React from 'react';
import MainRouter from './Router/MainRouter';

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log({BASE_URL});
function App() {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
