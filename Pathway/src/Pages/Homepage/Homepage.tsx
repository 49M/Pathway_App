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
        <button>
          <Link to="/mathpath">Mathematics</Link>
        </button>
        <button>
          <Link to="/cspath">Computer Science</Link>
        </button>
        <button>
          <Link to="/lspath">Life Science</Link>
        </button>
      </div>
    </div>
  );
}

export default Homepage;