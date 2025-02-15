import { useState } from 'react'
import '../styles/App.css'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CSPath from './CSPath'

export function App() {
  // const [count, setCount] = useState(0)
  return (
    <Router>
      <div className='header mb-20 mt-20'>
        <h1>Pathway Course Planner</h1>
      </div>
      <div className='button-container'>
        <button>
          <Link to="/cspath">Computer Science</Link>
        </button>
      </div>
      <Routes>
        <Route path="/cspath" element={<CSPath />} />
      </Routes>
    </Router>
  );
}

export default App
