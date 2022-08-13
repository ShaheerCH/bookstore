import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = () => (
  <header className="navbar">
    <nav>
      <h1>Book Store</h1>
      <Link to="/">BOOKS </Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
    <BsFillPersonFill className="profile" />
  </header>
);

export default Navbar;
