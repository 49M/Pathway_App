import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

function Homepage() {
  return (
    <div>
      <div className='header mb-20 mt-20'>
        <h1>Pathway Course Planner</h1>
      </div>
      <div className='button-container'>
          <Link to="/mathpath">
            <button>Mathematics</button>
          </Link>
          <Link to="/cspath">
            <button>Computer Science</button>
          </Link>
          <Link to="/lspath">
            <button>Life Science</button>
          </Link>
      </div>
    </div>
  );
}

export default Homepage;