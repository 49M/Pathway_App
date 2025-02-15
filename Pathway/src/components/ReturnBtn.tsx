import React from 'react'
import '../styles/App.css';
import { Link } from 'react-router-dom';


export const ReturnBtn = () => {
  return (
    <div className="fixed top-8 left-8 z-50">
      <Link to="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full h-full">
          Return
        </button>
      </Link>
    </div>
  )
}

export default ReturnBtn