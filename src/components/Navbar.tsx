import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <h1>Logo</h1>
      <ul className='flex'>
        <Link
          className='border-black border-solid border-r-[1px] px-2 uppercase'
          href={"/"}
        >
          Home
        </Link>
        <Link
          className='border-black border-solid border-r-[1px] px-2 uppercase'
          href={"/programs"}
        >
          Programs
        </Link>
        <li className='border-black border-solid border-r-[1px] px-2 uppercase'>
          How It Works
        </li>
        <Link className='px-2 uppercase' href={"/about-us"}>
          About
        </Link>
      </ul>

      <a
        href='#'
        className='bg-primary uppercase text-white rounded-xl px-6 py-3 font-bold'
      >
        Book my free trial lesson
      </a>
    </nav>
  );
};
