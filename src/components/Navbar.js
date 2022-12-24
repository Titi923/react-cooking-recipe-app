import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='logo'><h1>CookingApp</h1></Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
