import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-transparent text-black py-4 px-6 flex justify-between items-center z-50">
      <h1><Link href="/" className="text-xl font-bold">gpDev</Link></h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/about" className="hover:text-gray-600">About</Link></li>
          <li><Link href="/profile" className="hover:text-gray-600">Profile</Link></li>
          <li><Link href="/contact" className="hover:text-gray-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;