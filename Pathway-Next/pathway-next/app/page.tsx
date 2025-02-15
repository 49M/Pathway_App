import React from 'react';
import Link from 'next/link';

const sections = [
    {name: "Mathematical Sciences", href: '/mathemetical-sciences'},
    {name: "Computer Science", href: '/computer-science'}, 
    {name: "Life Science", href: '/life-science'}
]

export default function Home() {
  return (
    <div className='flex flex-col w-full items-center'>
      <div className=' header mb-20 mt-20'>
        <h1>Pathway Course Planner</h1>
      </div>
      <div className='button-container'>
        {sections.map(slug => {
            return (<div key={slug.href}>
            <Link href={`/section/${slug.href}`}>
          <button>{slug.name}</button>
        </Link>
            </div>)
        })}
      </div>
    </div>
  );
}
