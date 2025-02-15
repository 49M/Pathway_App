import React from 'react';
import { Outlet } from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
    <div>
      <Outlet /> {/* This will render the child routes */}
    </div>
  );
}

export default App;
