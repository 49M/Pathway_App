import React from 'react'
import Link from 'next/link'


export const ReturnBtn = () => {
  return (
    <div className="fixed top-8 left-8 z-50">
      <Link href="/">
        <button className="px-4 py-2 rounded w-full h-full">
          Return
        </button>
      </Link>
    </div>
  )
}

export default ReturnBtn