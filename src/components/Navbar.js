import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

// styles
import './Navbar.css';

// components
import Searchbar from "../components/Searchbar"

export default function Navbar() {
  const { color } = useTheme();
  
  return (
    <div className="navbar" style={{ background: color }} >
      <nav>
        <Link to="/" className='logo'><h1>CookingApp</h1></Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
