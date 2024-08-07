import Link from 'next/link';
import '../styles.css'; // Import the custom CSS file

const Navbar = () => {
  return (
    <nav className="navbar sm:fixed">
      <ul className="navbar-ul flex sm:flex-row flex-col">
        <li>
          <Link href="#homepart" className="navbar-link  ">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about" className="navbar-link">
            About Me
          </Link>
        </li>
        <li>
          <Link href="#services" className="navbar-link">
            Services
          </Link>
        </li>
        <li>
          <Link href="#portfolio" className="navbar-link">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="#contact" className="navbar-link">
            Contact Me
          </Link>
        </li>
      </ul>
      <Link href="#contact" className="navbar-button">
        Let's chat
      </Link>
    </nav>
  );
};

export default Navbar;
