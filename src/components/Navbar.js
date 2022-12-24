import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

// components
import Searchbar from "../components/Searchbar"

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='logo'><h1>CookingApp</h1></Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
