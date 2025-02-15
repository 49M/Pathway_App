import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Pathway Course Planner</h1>
      <div className='button-container'>
        <Link href="/mathpath">
          <button>Mathematics</button>
        </Link>
        <Link href="/cspath">
          <button>Computer Science</button>
        </Link>
        <Link href="/lspath">
          <button>Life Science</button>
        </Link>
      </div>
    </div>
  );
}
