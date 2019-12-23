import React from 'react';
import Home from './modules/home/Home';
import './App.css';
import SiderComponent from './modules/common/SiderComponent';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* <Home /> */}
      <SiderComponent components={
        <Home />
      }/>
    </div>
  );
}

export default App;
