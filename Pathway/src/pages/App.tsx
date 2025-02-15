import { useState } from 'react'
import '../styles/App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='header mb-20 mt-20'>
        <h1>Pathway Course Planner</h1>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
      <div className='button-container'>
        <button>
          Mathematics
        </button>
        <button>
          Computer Science
        </button>
        <button>
          Life Science
        </button>
      </div>
    </>
  )
}

export default App
