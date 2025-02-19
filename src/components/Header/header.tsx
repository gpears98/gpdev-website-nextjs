import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-transparent text-white py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">gpDev</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="#about" className="hover:text-gray-400">About</Link></li>
          <li><Link href="#profile" className="hover:text-gray-400">profile</Link></li>
          <li><Link href="#contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;