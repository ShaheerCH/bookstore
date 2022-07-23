import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h2>Book Store</h2>
    <nav>
      <Link to="/">BOOKS </Link>
      <Link to="/categories">CATEGORIES</Link>
    </nav>
  </header>
);

export default Navbar;
