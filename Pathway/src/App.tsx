// import { useState } from 'react';
// import './styles/App.css';
// import CSPath from './Pages/CSPath/CSPath';
// import { Link, Outlet } from 'react-router';

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <div>
//       <div className='header mb-20 mt-20'>
//         <h1>Pathway Course Planner</h1>
//       </div>
//       <div className='button-container'>
//         <button>
//           <Link to="/mathpath">Mathematics</Link>
//         </button>
//         <button>
//           <Link to="/cspath">Computer Science</Link>
//         </button>
//         <button>
//           <Link to="/lspath">Life Science</Link>
//         </button>
//       </div>
//       <Outlet />
//     </div>
//   );
// }

// export default App;

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
