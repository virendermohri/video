'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {  useState } from 'react';
// Import icons from react-icons
import { HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const categories = [
  'Yoga',
  'Cardio',
  'Strength',
  'Pilates',
  'Meditation',
  'Crossfit',
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
const pathname = usePathname();
  return (
    <header className={`text-white ${pathname==="/advertise"?" hidden ":" block "}  z-50`}>
      <div className="max-w-5xl mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl flex font-bold ">
          <p className='px-2 py-1 '>Desi</p><p className='px-2 shadow-2xl rounded py-1 bg-blue-500'>Bhabi</p>
        </Link>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-grow max-w-md mx-4">
          <input
            type="text"
            placeholder="Search videos..."
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-white hover:text-yellow-600">
            Home
          </Link>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex text-white items-center gap-1   focus:outline-none"
              aria-haspopup="true"
              aria-expanded={catOpen}
            >
              Categories <HiChevronDown size={16} />
            </button>

            {catOpen && (
              <ul className="absolute mt-2 bg-[#212121] border rounded shadow-md w-40 py-1 z-50">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/category/${cat.toLowerCase()}`}
                      className="block px-4 py-2 text-white hover:bg-black"
                      onClick={() => setCatOpen(false)}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/upload" className="text-white hover:text-blue-600">
            Upload
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex  scrollbarremove   justify-center items-center gap-6">
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Trending
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Best
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Most Viewed
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Leaked
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Newst
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Best
        </Link>
        
      </nav>
      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-3 shadow">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full px-4 py-1 mb-3"
          />

          <Link
            href="/"
            className="block py-2 text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Categories Dropdown */}
          <div>
            <button
              onClick={() => setCatOpen(!catOpen)}
              className="flex items-center gap-1 text-white hover:text-blue-600 w-full py-2 focus:outline-none"
            >
              Categories <HiChevronDown size={16} />
            </button>

            {catOpen && (
              <ul className="pl-4">
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      href={`/category/${cat.toLowerCase()}`}
                      className="block py-1  hover:text-blue-600"
                      onClick={() => {
                        setCatOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/upload"
            className="block py-2 text-white hover:text-blue-600"
            onClick={() => setMenuOpen(false)}
          >
            Upload
          </Link>
        </nav>
        
      )}
      <nav className="flex scrollbarremove pl-3  md:hidden overflow-auto items-center gap-2">
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Trending
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Best
        </Link>
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Leaked
        </Link>
        
        <Link href="/" className="text-white bg-black px-5 py-1 hover:text-yellow-600">
          Newest
        </Link>
        
        
      </nav>
    </header>
  );
}
